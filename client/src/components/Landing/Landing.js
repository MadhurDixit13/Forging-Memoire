import "./Landing.css";
import sample from "../Explore.mp4";

import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="Landing">
        <video
          id="myVideo"
          className="background-video videoTag"
          autoPlay
          loop
          muted
        >
          <source src={sample} type="video/mp4" />
        </video>
        <div className="content">
          <div class="panel pink">
            <Link to="/home">
              <button style={{ cursor: "pointer" }}>Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;

