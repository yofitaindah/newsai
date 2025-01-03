import ctaImage from "@/public/images/screens/screen-2.jpg";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../utils/Reveal";

export default function CtaHome2() {
	return (
		<Reveal el="section" className="cta-section style-2 py-10 py-lg-15" delay={0.15}>
			<div className="container">
				<div className="rounded-5 border position-relative pt-6 px-6 overflow-hidden bg-striped bg-striped-bottom bg-dark-blue-4 border-primary-dark">
					<div className="row align-center justify-center g-0">
						<div className="col-lg-5">
							<div className="p-0 pt-md-6 text-center text-lg-start p-lg-6 p-xl-10">
								<h2 className="text-white mb-6">
									Using <span className="text-primary-dark">NewsAI</span> you can
									save hours each week creating long-form content.
								</h2>
								<Link href="/login" className="btn btn-primary-dark">
									Get Started Free
								</Link>
							</div>
						</div>

						<div className="col-lg-7">
							<div className="cta-image-container mt-10">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 86 42"
									className="text-primary-dark arrow-shape"
								>
									<path
										fill="currentColor"
										d="M83.007 5.063c-8.303-4.146-19.138-3.888-27.778-.97C46.956 6.888 37.093 13.477 37.1 23.3c0 3.58 2.13 7.126 6.128 6.453 3.714-.623 5.706-4.227 4.922-7.795-2.116-9.638-15.81-9.008-22.92-6.476a30.564 30.564 0 0 0-11.9 7.744c-3.05 3.222-6.07 7.587-6.6 12.094-.075.65.97.914 1.24.332 1.429-3.109 2.544-6.172 4.632-8.935 2.168-2.869 4.92-5.3 7.982-7.161 6.077-3.694 15.03-5.894 21.7-2.497 3.533 1.802 6.914 7.774 2.361 10.55-1.845 1.124-4.263.905-5.36-1.113-1-1.843-.788-4.302-.285-6.253 2.048-7.951 10.417-12.945 17.706-15.252a39.207 39.207 0 0 1 12.77-1.803c4.621.113 8.847 1.265 13.224 2.615.426.133.72-.536.308-.74Z"
									/>
									<path
										fill="currentColor"
										d="M85.318 6.107C77.431-.542 66.216-1.539 56.765 2.153 52.217 3.93 48.075 6.62 44.43 9.867c-3.718 3.315-7.686 7.46-9.29 12.29-1.122 3.37-.827 9.393 3.792 9.836 4.065.392 8.748-3.306 9.751-7.167 1.123-4.321-2.065-8.325-5.861-9.91-4.533-1.89-10.034-1.255-14.67-.028C18.004 17.574 9.163 24.89 4.811 34.499c-.414.917.925 1.725 1.358.797 3.22-6.944 8.669-12.606 15.433-16.148 3.447-1.805 7.224-3.029 11.08-3.527 4.417-.568 9.8-.516 12.977 3.1 3.508 3.99 1.106 8.906-3.196 10.993-2.51 1.218-5.217 1.2-6.206-1.88-.804-2.498.079-5.313 1.285-7.533C41.411 13.192 48.878 7.087 56.22 3.912 65.421-.067 76.632.335 84.582 6.835c.51.424 1.248-.296.736-.728Z"
									/>
									<path
										fill="currentColor"
										d="M14.65 30.337c-1.917.849-3.728 1.993-5.56 3.01-.866.48-1.735.96-2.602 1.445-.4.223-2.362 1.634-2.766 1.416-.21-.111-.02-2.62-.02-2.95l-.022-2.95c-.015-1.918.346-4.259-.32-6.075-.237-.65-1.107-.667-1.334.005-.423 1.245-.241 2.569-.222 3.873.02 1.474.044 2.95.065 4.423.022 1.364-.587 4.544.89 5.408 1.41.826 3.676-1.342 4.81-2.007 2.547-1.49 5.266-2.848 7.666-4.563a.595.595 0 0 0-.585-1.035Z"
									/>
									<path
										fill="currentColor"
										d="M14.241 29.944c-1.847 1.293-3.383 3.118-5.07 4.618-1.96 1.739-3.985 3.433-6.174 4.873l1.349.775a76.48 76.48 0 0 1 .125-7.34c.158-2.375.909-4.93.706-7.287-.06-.686-1.104-1.162-1.452-.39-.928 2.06-.94 4.768-1.106 6.995a64.81 64.81 0 0 0-.072 8.036c.042.81.939 1.134 1.53.635 1.972-1.665 3.983-3.264 5.88-5.02 1.705-1.578 3.703-3.259 4.913-5.258.224-.38-.243-.907-.629-.637Z"
									/>
									<path
										fill="currentColor"
										d="M14.98 28.142C10.7 32.102 6.441 36.087 2.12 40l1.531.634c-.332-2.723-.642-5.443-.777-8.184-.123-2.526.22-5.24-.273-7.715-.155-.782-1.317-.715-1.506.006-.67 2.525-.275 5.5-.115 8.079.166 2.698.443 5.394.902 8.056.118.686 1.054.85 1.499.402 4.119-4.124 8.302-8.18 12.467-12.258.576-.558-.285-1.422-.87-.878Z"
									/>
								</svg>
								<div className="cta-img rounded-top-4">
									<Image
										placeholder="blur"
										src={ctaImage}
										alt="cta"
										className="img-fluid w-full h-full object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Reveal>
	);
}
