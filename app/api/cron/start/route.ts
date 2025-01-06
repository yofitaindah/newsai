import { NextRequest, NextResponse } from "next/server";

import axios from "axios";
import Pusher from "pusher";
import { TwitterApi } from "twitter-api-v2";
import { summarizeNews } from "@/utils/summarize";
import { startCronJob } from "@/utils/cronManager";

const messages = [
    "Initializing Agent AI...",
    "Loading AI models and configurations...",
    "Agent AI started...",
];

const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID as string,
    key: process.env.NEXT_PUBLIC_PUSHER_KEY as string,
    secret: process.env.PUSHER_SECRET as string,
    cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER as string,
    useTLS: true,
});

const client = new TwitterApi({
    appKey: process.env.API_KEY as string,
    appSecret: process.env.API_SECRET_KEY as string,
    accessToken: process.env.ACCESS_TOKEN as string,
    accessSecret: process.env.ACCESS_TOKEN_SECRET as string,
});

/**
 * Handles POST requests to start a cron job.
 * @param {NextRequest} req - The incoming request object.
 * @returns {Promise<Response>} - A promise resolving to the response object.
 */
export async function POST(req: NextRequest): Promise<NextResponse> {
    const body = await req.json();

    const { schedule, query } = body;

    let currentMessageIndex: number = 0;
    let interval: NodeJS.Timeout;

    const sendMessage = async () => {
        console.log("currentMessageIndex", currentMessageIndex);
        console.log("messages", messages.length);

        if (currentMessageIndex < messages.length) {
            console.log("bottt");
            await pusher.trigger("agent", "news", {
                message: messages[currentMessageIndex],
            });
            currentMessageIndex++;
        } else {
            console.log("trigger");

            clearInterval(interval);
            const cronSchedule = process.env.NEXT_CRON_SCHEDULE as string;

            const init = async () => {
                try {
                    const responseNews = await fetchNews(query);

                    const { body, url } = responseNews;
                    console.log("Trying to generate summary...");
                    const generateSummary = await summarizeNews(body, url);

                    if (generateSummary) {
                        const responseOfTweet = await postTweet(generateSummary);
                        console.log("responseOfTweet...", responseOfTweet);

                        if (responseOfTweet) {
                            console.log("ok");
                            pusher.trigger("agent", "news", {
                                message: responseOfTweet,
                            });
                        } else {
                            console.log("tidak ok");

                            pusher.trigger("agent", "news", {
                                message: "Error Posting news into x.com. Please try again later.",
                            });
                        }
                    }
                } catch (error) {
                    console.log("Error fetching crypto news:", error);
                }
            };

            await init();

            startCronJob(cronSchedule, async () => {
                console.log("Running scheduled task at", new Date());
                await init();
            });
        }
    };
    // Send first message immediately
    // sendMessage();

    // Set interval to trigger messages every 1 minute
    interval = setInterval(sendMessage, 900);
    return NextResponse.json({ message: "Agent AI started successfully." }, { status: 200 });
}

const fetchNews = async (query: string) => {
    const apiKey = process.env.CRYPTOCOMPARE_API_KEY as string;
    let url = "https://min-api.cryptocompare.com/data/v2/news/";

    if (query) {
        url += `?categories=${query}`;
    }
    try {
        const response = await axios.get(url, {
            params: { lang: "EN" },
            headers: {
                Authorization: `Apikey ${apiKey}`,
            },
        });
        console.log("news response", response);
        return response.data.Data[0];
    } catch (error) {
        console.log("news err response", error);
        const errMsg = "news err response";
        throw new Error(errMsg, { cause: error });
    }
};

const postTweet = async (text: string) => {
    try {
        // const twitterClient = new TwitterApi(`${accessToken}`);
        const result = await client.v2.tweet(text);

        const data = result.data;
        console.log("TWEET response", result);
        return {
            id: data.id,
            text: data.text,
        };
    } catch (error) {
        console.log("TWEET err response", error);
        const errMsg = "TWEET err response";
        throw new Error(errMsg, { cause: error });
    }
};
