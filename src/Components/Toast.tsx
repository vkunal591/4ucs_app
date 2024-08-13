export default function Toast(porps: {
  toastTitle: string;
  toastMessage: string;
}) {
  return (
    <div
      className={`position-fixed bottom-0 end-0 p-3 `}
      style={{ zIndex: "11" }}
    >
      <div
        id="liveToast"
        className="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header bg-success text-white">
          {/* <img src="..." className="rounded me-2" alt="..." /> */}
          <strong className="me-auto">{porps.toastTitle || "Success"}</strong>
          <small></small>
          {/* <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button> */}
        </div>
        <div className="toast-body">
          {porps.toastMessage || "News Latter Sended Successfully."}
        </div>
      </div>
    </div>
  );
}
