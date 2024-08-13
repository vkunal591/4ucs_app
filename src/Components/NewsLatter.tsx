import { useState } from "react";

export default function NewsLatter() {
  const [emailAddress, setemailAddress] = useState("");

  const sendMail = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const headersList = {
      origin: "http://localhost:5000",
      mode: "no-cors",
      "Content-Type": "application/json"
    };
    const body = {
      email: emailAddress
    };

    const bodyContent = JSON.stringify(body);
    try {
      const response = await fetch(
        `http://localhost:5000/api/contact/newslatter`,
        {
          method: "POST",
          body: bodyContent,
          headers: headersList
        }
      );
      // const data = await response.text();
      if (response.status === 201) {
        show();
        setemailAddress("");
      } else if (response.status === 200) {
        show();
        setemailAddress("");
      } else {
        show();
      }
    } catch (error) {
      console.log(error);
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
    <div
      className="container-fluid p-3 text-center bg-dark text-white mt-5"
      id="newslatter"
      style={{ height: "230px" }}
    >
      <div className="row h-100  d-flex align-items-center cs-newslatter-flex">
        <div className="col ">
          <h3 className="card-title">Sign up to our newslatter</h3>
          <p className="card-text">
            Stay up to date with the latest news, announcements and articles.
          </p>
        </div>

        <div className="col d-flex justify-content-center align-items-center">
          <div className="input-group mb-3 w-75">
            <input
              type="email"
              className="form-control"
              name="email"
              value={emailAddress}
              placeholder="help@4uconsoltantservice.com"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              onChange={(e) => setemailAddress(e.target.value)}
            />
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
              onClick={(e) => sendMail(e)}
            >
              Send
            </button>
          </div>
          {/* <form className="d-flex w-100" action="" method="get">
                    <input type="email" className="form-control bg-secondary rounded-0 text-white w-75 px-4" id="email" placeholder="help@4uconsoltantservice.com" />
                    <input type="submit" className="form-control w-auto text-wight-800 bg-primary border-0 rounded-0 text-white" id="inputPassword2" placeholder="Password" />
                </form> */}
        </div>
      </div>
    </div>
  );
}
