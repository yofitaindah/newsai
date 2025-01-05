import { TPostMetadata } from "@/types/blog";
import Reveal from "../utils/Reveal";
import { MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import '@/public/css/roadmap.css';
// import BlogItem from "./BlogItem";

export default function RoadmapSection() {
	return (
		<div className="row">
			<div className="col-md-12">
			<ul className="timeline-with-icons">
        <li className="timeline-item mb-5">
          <span className="timeline-icon">
            {/* <MDBIcon fas icon="rocket" color="primary" size="sm" /> */}
          </span>

          <h5 className="fw-bold">Phase 1</h5>
          <p className="text-muted mb-2 fw-bold">2025</p>
          <p className="text-muted">
          Build core features: news aggregation, sentiment analysis, and real-time alerts. Launch web dashboard and mobile app prototypes. Launching NEWS AI $NEAI on Uniswap, ERC20. Engaging the community through community outreach.
          </p>
        </li>

        <li className="timeline-item mb-5">
          <span className="timeline-icon">
            {/* <MDBIcon fas icon="hand-holding-usd" color="primary" size="sm" /> */}
          </span>
          <h5 className="fw-bold">Phase 2</h5>
          <p className="text-muted mb-2 fw-bold">2025</p>
          <p className="text-muted">
          Implement advanced NLP models for summarization and context understanding. Introduce recommendation engines. Auditing $NEAI to increase holder trust. Accelerating community expansion through user engagement marketing campaigns.
          </p>
        </li>

        <li className="timeline-item mb-5">
          <span className="timeline-icon">
            {/* <MDBIcon fas icon="users" color="primary" size="sm" /> */}
          </span>
          <h5 className="fw-bold">Phase 3</h5>
          <p className="text-muted mb-2 fw-bold">2025</p>
          <p className="text-muted">
          Collaboration with KOLs and CTs. More advertising, promotions, and collaborations. Roll out API access for institutions. Expand global coverage and multi-language support.
          </p>
        </li>

        <li className="timeline-item mb-5">
          <span className="timeline-icon">
            {/* <MDBIcon fas icon="money-bill-wave" color="primary" size="sm" /> */}
          </span>
          <h5 className="fw-bold">Phase 4</h5>
          <p className="text-muted mb-2 fw-bold">2025</p>
          <p className="text-muted">
          Add user forums and discussion boards. Launch educational content and tutorials. More feature on the $NEAI Platform. Fixing bugs and adjusting the platform based on beta user feedback.
          </p>
        </li>
      </ul>
			</div>
		</div>
	);
}
