import { technologiesImages } from "../Images/images";
import { Banner } from "./Banner";

export default function AboutTechnology() {
  return (
    <div className="container-fluid pt-5 h-100" id="experties">
      <h3 className="card-text m-0 fs-6 py-2 text-center">
        <small className="text-muted fs-5">Our Experties</small>
      </h3>
      <h2 className="card-title mb-3 text-center">
        <b>What we are great at</b>
      </h2>
      <div className="row pt-2 vh-50">
        <Banner reverse={false} technologiesImages={technologiesImages} />
      </div>
      <div className="row vh-50">
        <Banner reverse={true} technologiesImages={technologiesImages} />
      </div>
    </div>
  );
}
