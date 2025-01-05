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
          <p className="text-muted">
            <ul>
              <li>Build core features: news aggregation, sentiment analysis, and real-time alerts</li>
              <li>Launch web dashboard and mobile app prototypes</li>
              <li>Launching NEWS AI $NEAI on Uniswap, ERC20</li>
              <li>Engaging the community through community outreach</li>
            </ul>
          </p>
        </li>

        <li className="timeline-item mb-5">
          <span className="timeline-icon">
            {/* <MDBIcon fas icon="hand-holding-usd" color="primary" size="sm" /> */}
          </span>
          <h5 className="fw-bold">Phase 2</h5>
          <p className="text-muted">
            <ul>
              <li>Implement advanced NLP models for summarization and context understanding</li>
              <li>Introduce recommendation engines. Auditing $NEAI to increase holder trust</li>
              <li>Accelerating community expansion through user engagement marketing campaigns</li>
            </ul>
          </p>
        </li>

        <li className="timeline-item mb-5">
          <span className="timeline-icon">
            {/* <MDBIcon fas icon="users" color="primary" size="sm" /> */}
          </span>
          <h5 className="fw-bold">Phase 3</h5>
          <p className="text-muted">
            <ul>
              <li>Collaboration with KOLs and CTs</li>
              <li>More advertising, promotions, and collaborations</li>
              <li>Roll out API access for institutions</li>
              <li>Expand global coverage and multi-language support.</li>
            </ul>
          </p>
        </li>

        <li className="timeline-item mb-5">
          <span className="timeline-icon">
            {/* <MDBIcon fas icon="money-bill-wave" color="primary" size="sm" /> */}
          </span>
          <h5 className="fw-bold">Phase 4</h5>
          <p className="text-muted">
           <ul>
              <li>Add user forums and discussion boards</li>
              <li>Launch educational content and tutorials</li>
              <li>More feature on the $NEAI Platform</li>
              <li>Fixing bugs and adjusting the platform based on beta user feedback</li>
            </ul>
          </p>
        </li>
      </ul>
			</div>
		</div>
	);
}
