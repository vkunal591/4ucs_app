import "./Css/service.css";
import { serviceImages } from "../Images/images";

export default function Services() {
  return (
    <div className="container pt-5 h-100" id="services">
      <h3 className="card-text m-0 fs-6 text-center">
        <small className="text-muted">Our Services</small>
      </h3>
      <h2 className="card-title mb-3 text-center">
        <b>What we do best</b>
      </h2>
      <div className="conta mt-5">
        <div className="card-left button__right-left card-k">
          <div className="card-image">
            <img
              className="m-auto"
              src={
                serviceImages[2] ||
                "https://images.pexels.com/photos/220072/pexels-photo-220072.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260"
              }
              width={"150px"}
              height={"150px"}
            />
          </div>
          <div className="card-text">
            <p className="cs-hover-white">UI/UX Design & Development</p>
          </div>
        </div>
        <div className="card-top button__bottom-top card-k">
          <div className="card-image">
            <img
              className="m-auto"
              src={
                serviceImages[5] ||
                "https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              }
              width={"150px"}
              height={"150px"}
            />
          </div>
          <div className="card-text">
            <p className="cs-hover-white">
              Web & Android <br /> Development
            </p>
          </div>
        </div>
        <div className="card-right button__right-left card-k">
          <div className="card-image">
            <img
              className="m-auto"
              src={
                serviceImages[0] ||
                "https://images.pexels.com/photos/35828/soap-bubble-colorful-ball-soapy-water.jpg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260"
              }
              width={"150px"}
              height={"150px"}
            />
          </div>
          <div className="card-text">
            <p className="cs-hover-white">Software Consulting and Strategy</p>
          </div>
        </div>
        {/* <div className="card-bottom cs-d-none button__bottom-top card-k">
          <div className="card-image">
            <img
              className="m-auto"
              src={
                serviceImages[5] ||
                "https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              }
              width={"150px"}
              height={"150px"}
            />
          </div>
          <div className="card-text">
            <p className="cs-hover-white">
              Web & Android <br /> Development
            </p>
          </div>
        </div> */}
        <div className="card-right button__bottom-top card-k">
          <div className="card-image">
            <img
              className="m-auto"
              src={
                serviceImages[3] ||
                "https://images.pexels.com/photos/701855/pexels-photo-701855.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260"
              }
              width={"150px"}
              height={"150px"}
            />
          </div>
          <div className="card-text">
            <p className="cs-hover-white">Custome Software Development</p>
          </div>
        </div>
        <div className="card-left button__bottom-top card-k">
          <div className="card-image">
            <img
              className="m-auto"
              src={
                serviceImages[4] ||
                "https://images.pexels.com/photos/668295/pexels-photo-668295.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260"
              }
              width={"150px"}
              height={"150px"}
            />
          </div>
          <div className="card-text">
            <p className="cs-hover-white">Cloud Solutions and Migration</p>
          </div>
        </div>
      </div>
    </div>
  );
}
