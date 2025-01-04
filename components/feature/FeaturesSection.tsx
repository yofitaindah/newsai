import { dataFeatures } from "@/data/features";
import Link from "next/link";
import Reveal from "../utils/Reveal";
import Feature from "./Feature";

export default function FeaturesSection() {
	return (
		<section className="py-10 py-lg-15">
			<div className="container">
				<div className="text-center mb-18">
					<Reveal el="h1" className="mb-0 text-white" delay={0.05}>
						Key Objectives of NewsAI
					</Reveal>
				</div>

				<div className="row row-cols-1 row-cols-lg-2 g-6 g-xl-14">
					{dataFeatures.map((feature, index) => (
						<Reveal key={feature.id} className="col" delay={0.2}>
							<Feature data={feature} index={index} />
						</Reveal>
					))}
				</div>

				{/* <div className="text-center mt-12">
					<Link href="/login" className="btn btn-primary-dark">
						Try a demo
					</Link>
				</div> */}
			</div>
		</section>
	);
}
