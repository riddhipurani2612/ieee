import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./main.css";
const Popup = (props) => {
  const history = useHistory();

  const [colorCode, setColor] = useState("");
  useEffect(() => {
    if (props.color === "green") {
      setColor("#408140");
    } else {
      setColor("#d32f2f");
    }
  }, []);
  return (
    <Modal
      {...props}
      size="sm"
      area-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-confirm"
    >
      {props.status === "success" ? (
        <Modal.Header closeButton>
          <i class="fa fa-check-circle fa-4x" style={{ color: "#408140" }}></i>
          <div>
            <h2>{props.message}</h2>
          </div>
          <button>OK</button>
        </Modal.Header>
      ) : (
        <Modal.Header closeButton>
          <i
            className="fa fa-exclamation-circle fa-4x"
            style={{ color: "#d32f2f" }}
          ></i>
          <div>
            <h2>{props.message}</h2>
          </div>
          <button>OK</button>
        </Modal.Header>
      )}
    </Modal>
  );
};
export default Popup;
