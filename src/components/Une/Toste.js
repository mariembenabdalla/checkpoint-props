import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const Toste = () => {
  return (
    <div>
      <div
        aria-live="polite"
        aria-atomic="true"
        className=""
        style={{ minHeight: "240px", marginBottom: "10px", marginTop: "0px" }}
      >
        <ToastContainer
          position="middle-end"
          className="p-3"
          style={{ zIndex: 1 }}
        >
          <Toast>
            <Toast.Header>
              <img
                src=".\assets\img\téléchargement.png"
                className="rounded me-2"
                style={{ height: "44px" }}
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small className="text-muted">just now</small>
            </Toast.Header>
            <Toast.Body>See? Just like this.</Toast.Body>
          </Toast>
          <Toast>
            <Toast.Header>
              <img
                src=".\assets\img\9cedb.jpg"
                className="rounded me-2"
                alt=""
                style={{ height: "37px" }}
              />
              <strong className="me-auto">Bootstrap</strong>
              <small className="text-muted">2 seconds ago</small>
            </Toast.Header>
            <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
          </Toast>
          <Toast>
            <Toast.Header>
              <img
                src=".\assets\img/28379.jpg"
                className="rounded me-2"
                alt=""
                style={{ height: "37px" }}
              />
              <strong className="me-auto">Bootstrap</strong>
              <small className="text-muted">2 seconds ago</small>
            </Toast.Header>
            <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </div>
  );
};

export default Toste;
