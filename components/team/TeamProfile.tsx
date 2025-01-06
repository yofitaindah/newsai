import { TProfile } from "@/types/profile";
import Image from "next/image";

type TTeamProfileProps = {
	data: TProfile;
};

export default function TeamProfile({ data }: TTeamProfileProps) {
	const { name, designation, image, links } = data;
	return (
		<div className="team-card text-center">
			<Image
				src={image}
				alt="team"
				height={200}
				width={200}
				className="img-fluid team-member-img mb-6"
			/>
			<h4 className="text-white mb-1">{name}</h4>
			<p className="fs-sm mb-2">{designation}</p>
			<ul className="list-unstyled d-flex flex-wrap justify-center align-center gap-3 social-list mb-0">
				{links.facebook ? (
					<li>
						<a href={links.facebook} target="_blank" rel="noopener noreferrer">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
								<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								d="M3.15 9.752l7.35 3.225 2.7-2.9c.52-.56.44-1.3-.18-1.57L9.75 3.558c-.72-.34-1.5-.27-2.04.24L2.49 6.495c-.56.42-.69 1.07-.42 1.58l1.08 2.68c.29.65.94.99 1.63.69z"
								/>
							</svg>
						</a>
					</li>
				) : null}
			</ul>
		</div>
	);
}
