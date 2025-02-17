"use client";

import reviewIcon2 from "@/public/images/review-logos/capterra_reviews.svg";
import reviewIcon1 from "@/public/images/review-logos/trustpilot_reviews.svg";
import heroImage from "@/public/images/screens/screen-1.jpg";
import shapeImage from "@/public/images/shapes/blurry-shape-1.svg";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../utils/Reveal";
import TypedText from "./TypedText";
import AgentAIFeature from "../agentai/AgentAIFeature";
import MultipleSelect from "../select/MultipleSelect";

export default function Herosection() {
    return (
        <section
            className="hero-section style-1 overflow-hidden bg-dark pt-30 pb-15 pb-lg-20 pt-xl-36"
            data-bs-theme="dark"
        >
            <div className="container">
                <div className="row justify-center">
                    <div className="col-lg-9">
                        <div className="text-center">
                            <div className="position-relative z-1">
                                <Reveal el="h1" className="text-white mb-8" delay={0.15}>
                                    The Speed You Trust, The News You Need
                                    <br />
                                    <TypedText />
                                </Reveal>
                                {/* <Reveal el="p" className="text-primary-dark">
								Stay informed with the latest updates, instantly accessible, and always reliable. Trust us for your real-time news needs.
								</Reveal> */}
                                {/* <Reveal delay={0.3}>
									<Link href="/login" className="btn btn-lg btn-gradient-1">
										Let&apos;s Try!
									</Link>
								</Reveal> */}
                            </div>
                            <Reveal delay={0.45}>
                                <div className="image-with-shape">
                                    <Image
                                        src={shapeImage}
                                        alt="shape"
                                        className="shape animate-scale"
                                    />
                                    <MultipleSelect />

                                    <div className="mt-12 rounded-5 border border-primary-dark shadow-lg overflow-hidden position-relative z-1">
                                        {/* <iframe
											src = "http://147.79.70.213:3001/"
											title = "embedded content"
											className="iframe-content"
											style={{
												width: "100%",
												height: "100%",
												border: "none",
											}}
										></iframe> */}

                                        <AgentAIFeature />
                                    </div>
                                </div>
                            </Reveal>
                            <br />
                            <Reveal el="p" className="text-primary-dark">
                                Stay informed with the latest updates, instantly accessible, and
                                always reliable. Trust us for your real-time news needs.
                            </Reveal>
                            {/* <ul className="d-flex flex-wrap gap-4 gap-md-8 gap-lg-10 align-center justify-center mt-8 mb-0">
								<li>Write Blogs 10X Faster</li>
								<li>Write Higher Converting Posts</li>
								<li>Write More Engaging Emails</li>
							</ul>
							<div className="d-flex gap-8 align-center justify-center mt-12 review-badges">
								<Image src={reviewIcon1} alt="icon" className="img-fluid" />
								<Image src={reviewIcon2} alt="icon" className="img-fluid" />
							</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
