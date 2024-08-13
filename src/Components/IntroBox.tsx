import gif1 from "../../public/images/intro.gif";
import team from "../../public/images/team.webp";
import TypeWrriter from "./TypeWrriter";
export default function IntroBox() {
  const text = ["Transform", "Craft", "Translate"];
  return (
    <>
      <div className="container py-2">
        <div className="row row-cols-lg-auto cs-intro-row-col-reverse">
          <div className="col-sm-6 col-md-5 col-lg-6">
            <div className="card border-0 mt-5">
              <div className="card-body">
                <h1
                  className="card-title cs-intro-title"
                  style={{ fontSize: "50px" }}
                >
                  <b>
                    We{" "}
                    <span className="text-primary theam-color auto-type">
                      <TypeWrriter text={text} delay={100} />
                    </span>
                    <br /> Ideas Into Digital Solutions
                  </b>
                </h1>
                <p className="card-text px-0">
                  We design and develop unparalleled websites and software
                  solutions that enable companies to unlock their potential.
                </p>
                <a href="#contact" className="btn btn-primary">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0 pt-3 cs-w-50 cs-ml-0 ">
            <img src={gif1} className="w-100 cs-mt-25" alt="" srcSet="" />
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light ">
        <div className="row bg-light cs-intro-row-col py-5">
          <div className="col-sm-5 col-md-6 p-5">
            <img src={team} className="w-100 cs-mt-25" alt="" srcSet="" />
          </div>
          <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
            {" "}
            <div className="card border-0 bg-transparent">
              <div className="card-body px-5">
                <h5 className="card-text py-2 m-0 fs-6" id="about">
                  <small className="text-muted">Who we are</small>
                </h5>
                <h2 className="card-title mx-3">
                  <b>About Us</b>
                </h2>
                <p
                  className="card-text text-wrap px-3"
                  style={{ fontSize: "16px", lineHeight: "26px" }}
                >
                  Welcome to 4U Consultant Services Technologies, where
                  originality meets effectiveness. Founded by experienced
                  professionals with a love for technology, we are a dynamic
                  software service company committed to offering
                  state-of-the-art solutions tailored to meet our clients'
                  unique needs. With a team of enthusiastic and skilled
                  professionals, we are determined to deliver excellence in
                  every project we take on. Our focus on quality, innovation,
                  and customer satisfaction sets us apart in the industry. At 4U
                  Consultant Services, we are more than just developers – we are
                  dedicated to helping you achieve world-class digital
                  transformation. Let's innovate together.
                </p>
                <a href="#contact" className="btn btn-primary mx-3">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container  py-5" id="mission">
        <h6 className="text-secondary mx-5">Our Mission &amp; Vision</h6>
        <h2 className="mb-4 mx-5">
          <span className="star">
            <b className="">To Craft Creative and Innovative Solutions</b>
          </span>
        </h2>
        <div className="row justify-content-evenly mt-5">
          <div className="col-sm-5 col-md-5 mb-3 ">
            {" "}
            <div className="card-body bg-light px-5 py-5 rounded-4 h-100">
              <h5 className="card-text px-3 py-2 mx-0 fs-6">
                <small className="text-muted">Our Missions</small>
              </h5>
              <h4 className="card-title px-3 ">
                <b>Customer Success is our Mission</b>
              </h4>
              <p
                className="card-text pr-2 fs-6 "
                style={{ fontSize: "16px", lineHeight: "26px" }}
              >
                Our primary objective at CloudKodeForm is to equip businesses,
                regardless of their scale, with cutting-edge software solutions
                that foster expansion, optimize efficiency, and elevate overall
                productivity. We strive to establish ourselves as a reliable
                ally for our clients, assisting them in leveraging the potential
                of technology to accomplish their objectives and maintain a
                competitive edge in the current business environment.
              </p>
            </div>
          </div>
          <div className="col-sm-5 col-md-5 mb-3 ">
            <div className="card-body  bg-light px-5 py-5 rounded-4 h-100">
              <h5 className="card-text py-2 px-3 mx-0 fs-6">
                <small className="text-muted">Our Vision</small>
              </h5>
              <h4 className="card-title px-3">
                <b>To help companies with Innovative solutions</b>
              </h4>
              <p
                className="card-text pr-2 fs-6"
                style={{ fontSize: "16px", lineHeight: "26px" }}
              >
                Our goal is to create a future where all businesses, no matter
                their size or sector, can easily obtain the necessary tools and
                knowledge to succeed in the digital era. By constantly
                innovating and maintaining high standards, we aim to play a key
                role in influencing the direction of software services,
                promoting positive transformations, and leaving a significant
                mark on society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
