import { dataReviews } from "@/data/reviews";
import Reveal from "../utils/Reveal";
import ReviewsSlider from "./ReviewsSlider";

export default function ReviewsSection() {
    return (
        <section className="overflow-hidden pt-20 pt-lg-30 pb-10 pb-lg-15">
            <div className="container">
                <div className="row justify-center mb-18">
                    <div className="col-lg-9">
                        <div className="text-center">
                            <Reveal el="h1" className="text-white" delay={0.05}>
                                <span className="text-primary-dark">NewsAI</span> Trending{" "}
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
            <ReviewsSlider reviewsData={dataReviews} />
            <span className="d-block mt-6"></span>
            <ReviewsSlider reviewsData={dataReviews} reverseDirection />
        </section>
    );
}
