import Newsletter from "@/components/utils/Newsletter";
import footerLogo from "@/public/images/logo_news.png";
import Image from "next/image";
import Link from "next/link";
import DextoolIcon from '@/public/images/logo_dextool.svg';
import EtherscanIcon from '@/public/images/logo_etherscan.svg';
import TelegramIcon from '@/public/images/logo_telegram.svg';
import TwitterIcon from '@/public/images/logo_twitter.svg';
import YoutubeIcon from '@/public/images/logo_youtube.svg';
import TiktokIcon from '@/public/images/logo_tiktok.svg';

export default function Footer() {
	return (
		<footer className="footer bg-striped pt-10 pt-lg-15">
			<div className="container">
				<div className="row g-10">
					<div className="col-lg-4">
						<div className="footer-widget text-center text-lg-start">
							<Link href="/">
								<Image
									placeholder="blur"
									src={footerLogo}
									alt="GenAi"
									height={34}
									priority
								/>
							</Link>
							<p className="fs-sm mb-0 mt-4">
								Real-Time Crypto News and Analytics, Personalized.
							</p>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="footer-widget text-center text-lg-start">
							<h6 className="text-white mb-2">Quick Links</h6>
							<ul className="link-list list-unstyled mb-0">
								<li>
									<Link href="/about">NewsAI</Link>
								</li>
								<li>
									<Link href="/contact">Tokenomics</Link>
								</li>
								<li>
									<Link href="/blogs">Roadmap</Link>
								</li>
								<li>
									<Link href="/use-cases">Team Details</Link>
								</li>
								<li>
									<Link href="/faq">FaQ</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="footer-widget text-center text-lg-start">
							<h6 className="text-white mb-4">News & Update</h6>
							<Newsletter />
							<ul className="list-unstyled d-flex flex-wrap align-center justify-center justify-lg-start gap-3 social-list mb-0 mt-5">
								<li>
									<Link href="/">
										<Image
											src={TelegramIcon}
											alt="GenAi"
											height={24}
											priority
										/>
									</Link>
								</li>
								<li>
									<Link href="/">
										<Image
											src={TwitterIcon}
											alt="GenAi"
											height={24}
											priority
										/>
									</Link>
								</li>
								<li>
									<Link href="/">
										<Image
											src={YoutubeIcon}
											alt="GenAi"
											height={24}
											priority
										/>
									</Link>
								</li>
								<li>
									<Link href="/">
										<Image
											src={TiktokIcon}
											alt="GenAi"
											height={24}
											priority
										/>
									</Link>
								</li>
								<li>
									<Link href="/">
										<Image
											src={DextoolIcon}
											alt="GenAi"
											height={24}
											priority
										/>
									</Link>
								</li>
								<li>
									<Link href="/">
										<Image
											src={EtherscanIcon}
											alt="GenAi"
											height={24}
											priority
										/>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="text-center py-6 mt-8">
					<p className="fs-sm mb-0">
						Copyright <span className="text-primary-dark">NewsAI</span>
					</p>
				</div>
			</div>
		</footer>
	);
}
