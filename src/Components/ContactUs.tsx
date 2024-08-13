import { FormEvent, useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaWhatsapp
} from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Toast from "./Toast";

export default function ContactUs() {
  const [formTitle, setFormTitle] = useState("");
  const [message, setmessage] = useState("");
  const [isSubmit, setIsSubmit] = useState("Submit");
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    details: ""
  });

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;

    setFormInputs({
      ...formInputs,
      [name]: value
    });
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const headersList = {
      origin: "http://localhost:5000",
      mode: "no-cors",
      "Content-Type": "application/json"
    };

    const bodyContent = JSON.stringify(formInputs);
    try {
      setIsSubmit("Submiting...");

      const response = await fetch(
        `http://localhost:5000/api/contact/createcontact`,
        {
          method: "POST",
          body: bodyContent,
          headers: headersList
        }
      );
      // const data = await response.text();
      if (response.status === 201) {
        setIsSubmit("Form Submitted, We will contact you soon.");
        setFormTitle("Form Submitted");
        setmessage("Form Submited, Successfully.");
        show();
        // e.target.reset()
        setFormInputs({
          name: "",
          email: "",
          phone: "",
          subject: "",
          details: ""
        });
      } else if (response.status === 200) {
        show();
        setIsSubmit("Form already Submited");
        setFormTitle("Form already Submitted");
        setmessage("Contact you soon as soon possible, Thank You.");
        setFormInputs({
          name: "",
          email: "",
          phone: "",
          subject: "",
          details: ""
        });
      } else {
        show();
        setIsSubmit("Please fill again the form.");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmit("Submit");
    }
  };

  const show = () => {
    const toast = document.getElementById("liveToast");
    toast?.classList.toggle("show");
    setTimeout(() => {
      toast?.classList.toggle("show");
    }, 5000);
  };

  return (
    <div className="container">
      <h5 className="card-text mt-3 py-2 m-0 fs-6 text-center">
        <small className="text-muted fs-6">How to grow</small>
      </h5>
      <h2 className="card-title mx-3 text-center">
        <b>Contact Us</b>
      </h2>
      <div className="row d-flex justify-content-evenly py-5 cs-newslatter-flex">
        <div className="col-5 cs-w-100">
          <div className="card rounded-4 p-4 text-white bg-dark h-100">
            <div className="card-body">
              <h4 className="text-primary fs-5">
                <b>Contact Us</b>
              </h4>
              <h3 className="card-title text-white">
                Share Your Project Details
              </h3>
              <p className="card-text text-white">
                Connect with us! Your inquiries matter. Let us know your needs,
                and we'll link you to the right experts. We're dedicated to
                providing personalized support for a seamless experience.
              </p>
              <p>
                {/* <span>Mob: </span>9125483558 */}
              </p>
              <p>
                <span>Email Id: </span>4uconsoltantservice@gmail.com
              </p>
              <address>
                <span>Address: </span>Khandakpar,Bihar Sharif, Nalanda (803101),
                Bihar
              </address>

              {/* < className="socials"> */}
              <IconContext.Provider
                value={{
                  color: "white",
                  className: "global-class-name social-icon",
                  size: "2em"
                }}
              >
                <div
                  className=" d-flex row-col text-white text-center mt-5"
                  style={{ height: "50px" }}
                >
                  <a
                    className="nav-link social-icon"
                    href="#"
                    target="_blank"
                    style={{ height: "50px", width: "50px" }}
                  >
                    <FaGithub />
                  </a>
                  <a
                    className="nav-link social-icon"
                    href="https://www.linkedin.com/company/4u-consultant-service"
                    target="_blank"
                    style={{ height: "50px", width: "50px" }}
                  >
                    <FaFacebook />
                  </a>
                  <a
                    className="nav-link social-icon"
                    href="https://www.facebook.com/4uconsultantservice"
                    target="_blank"
                    style={{ height: "50px", width: "50px" }}
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    className="nav-link social-icon"
                    href="https://www.instagram.com/4uconsultantservice?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    style={{ height: "50px", width: "50px" }}
                  >
                    <FaInstagram />
                  </a>
                  <a
                    className="nav-link social-icon"
                    href="#"
                    target="_blank"
                    style={{ height: "50px", width: "50px" }}
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    className="nav-link social-icon"
                    href="mailto:4uconsultantservice@gmail.com"
                    target="_blank"
                    style={{ height: "50px", width: "50px" }}
                  >
                    <FaMailBulk />
                  </a>
                  <a
                    className="nav-link social-icon"
                    href="#"
                    target="_blank"
                    style={{ height: "50px", width: "50px" }}
                  >
                    <FaPhone />
                  </a>
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div className="col-5 cs-w-100" id="contact">
          <form method="post" onSubmit={(e) => submit(e)} className="p-4 ">
            {/* {<h4 className="text-danger">{isSubmit}</h4>}   */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formInputs.name}
                minLength={3}
                onChange={(e) => handleInputChange(e)}
                placeholder="Enter Your Name"
                required
              />
            </div>{" "}
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">
                Mobile No
              </label>
              <input
                type="number"
                className="form-control"
                id="mobile"
                name="phone"
                value={formInputs.phone}
                min={10}
                onChange={(e) => handleInputChange(e)}
                placeholder="9104*****"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formInputs.email}
                onChange={(e) => handleInputChange(e)}
                placeholder="name@example.com"
                required
              />
            </div>
            <select
              className="form-select"
              aria-label="Default select example"
              name="subject"
              value={formInputs.subject}
              onChange={(e) => handleInputChange(e)}
              required
            >
              <option defaultValue={""}>Select Subject</option>
              <option value="Website Designing and development">
                Website Designing and Development
              </option>
              <option value="UI/UX Development">UI/UX Development</option>
              <option value="Mpbile App Development">
                Mobile App Development
              </option>
              <option value="Custome Software Development">
                Custome Software Development
              </option>
              <option value="Technical Support">Technical Support</option>
              <option value="Business Consultancy">Business Consultancy</option>
            </select>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="details"
                value={formInputs.details}
                minLength={10}
                onChange={(e) => handleInputChange(e)}
                rows={3}
                required
              ></textarea>
            </div>
            <button
              className={`btn btn-primary cs-w-100 ${
                isSubmit === "Submitting..." ? "disabled" : ""
              }`}
              type="submit"
            >
              <span
                className={`spinner-border spinner-border-sm ${
                  isSubmit === "Submitting..." ? "" : "d-none"
                }`}
                role="status"
                aria-hidden="true"
              ></span>
              {isSubmit}
            </button>
          </form>
        </div>
      </div>
      <Toast toastTitle={formTitle} toastMessage={message} />
    </div>
  );
}
