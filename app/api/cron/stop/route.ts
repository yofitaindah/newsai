import { NextRequest, NextResponse } from "next/server";

import axios from "axios";
import Pusher from "pusher";
import { TwitterApi } from "twitter-api-v2";
import { summarizeNews } from "@/utils/summarize";
import { startCronJob, stopCronJob } from "@/utils/cronManager";

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
    stopCronJob();
    return NextResponse.json({ message: "Agent AI stopped successfully." }, { status: 200 });
}
