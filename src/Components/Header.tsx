import logo from "../../public/images/4ucs-logo.png";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white cs-border-bottom">
      <div className="container-fluid">
        <a className="navbar-brand d-flex" href="#">
          <div className="d-inline px-1">
            <img
              src={logo}
              alt=""
              width="105"
              height="65"
              className="d-inline-block align-text-top"
            />
          </div>
          <div
            className="d-flex flex-column justify-content-center"
            style={{ fontFamily: "monospace" }}
          >
            <span
              className="border border-3 border-top-0 border-bottom-0 border-end-0 border-secondary px-1"
              style={{ height: "27px" }}
            >
              Consultant
            </span>
            <span
              className="border border-3 border-top-0 border-bottom-0 border-end-0 border-secondary px-1"
              style={{ height: "27px" }}
            >
              Service
            </span>
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav  cs-w-100 justify-content-end space-between cs-w-75 me-3 mb-2 mb-lg-0 text-center">
            <li className="nav-item mx-2">
              <a
                className="nav-link text-secondary  active"
                aria-current="page"
                href="#"
              >
                <b>Home</b>
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className="nav-link text-secondary"
                aria-current="page"
                href="#about"
              >
                <b>About Us</b>
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className="nav-link text-secondary"
                aria-current="page"
                href="#mission"
              >
                <b>Our Mission</b>
              </a>
            </li>{" "}
            <li className="nav-item mx-2">
              <a
                className="nav-link text-secondary"
                aria-current="page"
                href="#experties"
              >
                <b>Our Experties</b>
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className="nav-link text-secondary"
                aria-current="page"
                href="#services"
              >
                <b>Services</b>
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className="nav-link text-secondary"
                aria-current="page"
                href="#newslatter"
              >
                <b>Newslatter</b>
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className="nav-link text-secondary"
                aria-current="page"
                href="#contact"
              >
                <b>Contact Us</b>
              </a>
            </li>
          </ul>
          {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form> */}
        </div>
      </div>
    </nav>
  );
}
