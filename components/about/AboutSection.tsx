import reviewIcon2 from "@/public/images/review-logos/capterra_reviews.svg";
import reviewIcon1 from "@/public/images/review-logos/trustpilot_reviews.svg";
import heroImage from "@/public/images/screens/screen-4.png";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../utils/Reveal";
import AgentAIFeature from "../agentai/AgentAIFeature";
import MultipleSelect from "../select/MultipleSelect";

export default function AboutSection() {
    return (
        <section className="py-15">
            <div className="container">
                <div className="row align-center">
                    <Reveal className="col-lg-6 col-xl-5" delay={0.05}>
                        <div className="text-center text-lg-start">
                            <p className="text-primary-dark fs-sm">NewsAI</p>
                            <h2 className="mb-4 text-white">
                                10,000+ Writers, Marketers, & Business owners Love GenAI.
                            </h2>
                            <Link href="/login" className="btn btn-lg btn-gradient-1">
                                Start Here!
                            </Link>
                        </div>
                    </Reveal>
                    <Reveal className="col-lg-6 offset-xl-1" delay={0.1}>
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
                    </Reveal>
                </div>
                <hr className="border-top border-lite-blue-4 opacity-100" />
                <div className="d-flex gap-8 align-center justify-center mt-12 review-badges">
                    <Image src={reviewIcon1} alt="icon" className="img-fluid" />
                    <Image src={reviewIcon2} alt="icon" className="img-fluid" />
                </div>
            </div>
        </section>
    );
}
