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

    let currentMessageIndex = 0;
    let interval: NodeJS.Timeout;

    const init = async () => {
        try {
            const { body, url } = await fetchNews(query);
            const generateSummary = await summarizeNews(body, url);
            console.log("Start broadcast via websocket...");

            if (generateSummary) {
                const responseOfTweet = await postTweet(generateSummary);
                if (responseOfTweet) {
                    pusher.trigger("agent", "news", {
                        message: generateSummary,
                    });
                }
            } else {
                pusher.trigger("agent", "news", {
                    message: body.slice(0, 200),
                });
            }
        } catch (error) {
            console.error(error);
            pusher.trigger("agent", "news", {
                message: "Error fetching news. Please try again later.",
            });
        }
    };

    const sendMessage = async () => {
        if (currentMessageIndex < messages.length) {
            pusher.trigger("agent", "news", {
                message: messages[currentMessageIndex],
            });
            currentMessageIndex++;
        } else {
            clearInterval(interval);

            startCronJob(schedule || "* * * * *", async () => {
                console.log("Running scheduled task at", new Date());
                await init();
            });
        }
    };
    // Send first message immediately
    sendMessage();

    // Set interval to trigger messages every 1 minute
    interval = setInterval(sendMessage, 900);
    return NextResponse.json({ message: "Agent AI started." }, { status: 200 });
}

const fetchNews = async (query: string) => {
    const apiKey = process.env.CRYPTOCOMPARE_API_KEY as string;
    let url = "https://min-api.cryptocompare.com/data/v2/news/";

    if (query) {
        url += `?categories=${query}`;
    }
    console.log("currentUrl News", url);
    try {
        const response = await axios.get(url, {
            params: { lang: "EN" },
            headers: {
                Authorization: `Apikey ${apiKey}`,
            },
        });

        return response.data.Data[0];
    } catch (error) {
        console.error("Error fetching crypto news:", error);
        return { error: "Failed to fetch news" };
    }
};

const postTweet = async (text: string) => {
    try {
        // const twitterClient = new TwitterApi(`${accessToken}`);
        const result = await client.v2.tweet(text);

        const data = result.data;
        return {
            id: data.id,
            text: data.text,
        };
    } catch (e) {
        return { error: "Failed to fetch news" + e };
    }
};
