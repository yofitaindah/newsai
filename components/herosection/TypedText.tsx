"use client";

import { useEffect, useState } from "react";
import {ReactTyped} from "react-typed";

export default function TypedText() {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted)
		return <span className="fw-bold text-gradient-2 typed-animation">Technical Writing</span>;

	return (
		<ReactTyped
			strings={["Real-Time", "Curated", "AI-Enhanced"]}
			typeSpeed={100}
			className="fw-bold text-gradient-2 typed-animation"
		/>
	);
}
