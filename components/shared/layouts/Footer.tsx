import Newsletter from "@/components/utils/Newsletter";
import footerLogo from "@/public/images/logo_news.png";
import LogoCoin from "@/public/images/coin1.png";
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
      <div className="container py-5">
        <div className="row g-4 justify-content-center text-center text-lg-start">
          {/* Column 1 */}
          <div className="col-lg-6 col-md-6">
            <div className="footer-widget">
              <Link href="/">
                <Image
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

          {/* Column 2 */}
          

          {/* Column 3 */}
          <div className="col-lg-6 col-md-6">
            <div className="footer-widget">
              <h6 className="text-white mb-4">News & Updates</h6>
              <Newsletter />
              <ul className="list-unstyled d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mt-4">
                <li>
                  <Link href="http://t.me/NewsAiAgent" target="_blank">
                    <Image
                      src={TelegramIcon}
                      alt="Telegram"
                      height={24}
                      priority
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://x.com/NewsAIAgents" target="_blank">
                    <Image
                      src={TwitterIcon}
                      alt="Twitter"
                      height={24}
                      priority
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://youtube.com/@newsaiagent" target="_blank">
                    <Image
                      src={YoutubeIcon}
                      alt="YouTube"
                      height={24}
                      priority
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.tiktok.com/@newsaiagents" target="_blank">
                    <Image
                      src={TiktokIcon}
                      alt="TikTok"
                      height={24}
                      priority
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.dextools.io/app/en/ether/pair-explorer/0x789dfd258c1c1e324ce6772e9e936c097b092ff2" target="_blank">
                    <Image
                      src={DextoolIcon}
                      alt="Dextool"
                      height={24}
                      priority
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://dexscreener.com/ethereum/0x789dfd258c1c1e324ce6772e9e936c097b092ff2" target="_blank">
                    <Image
                      src={EtherscanIcon}
                      alt="Etherscan"
                      height={24}
                      priority
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center py-6 mt-8">
		<div
			className="d-flex justify-content-center align-items-center"
			style={{ justifyContent: "center", display: "flex" }}
		>
			<p className="fs-sm mb-0 me-2">Copyright</p>
			<Link href="/about">
			<Image
				placeholder="blur"
				src={LogoCoin}
				alt="Coin"
				height={30}
				priority
			/>
			</Link>
			<span className="ms-2 text-primary-dark">NewsAI</span>
		</div>
		</div>
    </footer>
  );
}
