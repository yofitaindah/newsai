"use client";
import { Space_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import Image from "next/image";

import Pusher from "pusher-js";
import { getCurrentTime } from "@/utils/getCurrentTime";
import LogoCoin from "@/public/images/coin1.png";
const spaceMono = Space_Mono({
    variable: "--font-space-mono",
    subsets: ["latin"],
    weight: "400",
});

const AgentAIFeature = () => {
    const [status, setStatus] = useState(false);
    const [message, setMessage] = useState<{ time: string; message: string }[]>([]);

    useEffect(() => {
        // Initialize Pusher client
        setMessage([]);
        const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
            cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER as string,
        });

        const channel = pusher.subscribe("agent");
        channel.bind("news", (data: { message: string }) => {
            setMessage((message: { time: string; message: string }[]) => [
                ...message,
                {
                    time: getCurrentTime(),
                    message: data.message,
                },
            ]);
        });
    }, []);

    return (
        <div className="w-100">
            <div className="rounded overflow-hidden">
                <div className="border-bottom border-dark p-4 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                        <div className="d-flex gap-2">
                            <div
                                className="rounded-circle"
                                style={{
                                    width: "0.75rem",
                                    height: "0.75rem",
                                    backgroundColor: "#ff0000",
                                }}
                            ></div>
                            <div
                                className="rounded-circle"
                                style={{
                                    width: "0.75rem",
                                    height: "0.75rem",
                                    backgroundColor: "#ffff00",
                                }}
                            ></div>
                            <div
                                className="rounded-circle"
                                style={{
                                    width: "0.75rem",
                                    height: "0.75rem",
                                    backgroundColor: "#00ff00",
                                }}
                            ></div>
                        </div>
                        <span className="text-secondary text-sm ms-2 d-none d-sm-inline">
                            agent@newsai.tech:~
                        </span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <span
                            className="rounded-circle bg-success animate-pulse"
                            style={{
                                width: "0.5rem",
                                height: "0.5rem",
                                backgroundColor: "#4EFFBF",
                            }}
                        ></span>
                        <span className="text-secondary text-sm">Active</span>
                    </div>
                </div>

                <div
                    className="p-4 p-lg-6 overflow-auto"
                    style={{
                        backgroundColor: "rgb(26, 28, 30)",
                        scrollBehavior: "smooth",
                        height: "400px",
                        fontSize: "0.8rem",
                    }}
                >
                    {message.map((item, index) => (
                        <div className="d-flex align-items-center gap-3 mb-3" key={index}>
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-cpu w-4 h-4"
                                style={{
                                    color: "rgba(230, 248, 94, 1)",
                                }}
                            >
                                <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                                <rect width="6" height="6" x="9" y="9" rx="1"></rect>
                                <path d="M15 2v2"></path>
                                <path d="M15 20v2"></path>
                                <path d="M2 15h2"></path>
                                <path d="M2 9h2"></path>
                                <path d="M20 15h2"></path>
                                <path d="M20 9h2"></path>
                                <path d="M9 2v2"></path>
                                <path d="M9 20v2"></path>
                            </svg> */}
                            <Image
                                placeholder="blur"
                                src={LogoCoin}
                                alt="Coin"
                                height={30}
                                priority
                            />
                            <div className="flex-fill d-flex align-items-center gap-3">
                                <span
                                    className={spaceMono.className}
                                    style={{ color: "rgba(230, 248, 94, 1)", textAlign: "left" }}
                                >
                                    {item.time}
                                </span>
                                <span
                                    className={spaceMono.className}
                                    style={{ color: "#9CA3AF", textAlign: "left" }}
                                >
                                    {item.message}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AgentAIFeature;
