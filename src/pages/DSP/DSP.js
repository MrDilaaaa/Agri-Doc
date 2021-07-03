import React from "react";
import { Row, Col, Button } from "reactstrap";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import uuid from "uuid/v4";
import Widget from "../../components/Widget/Widget";
import s from "./DSP.module.scss";

class DSP extends React.Component {
  state = {
    options: {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    },
  };

  render() {
    return (
      <div className={s.root}>
        <h1 className="page-title">
        Disease Severity Prediction & <span className="fw-semi-bold">Future Behavior Assessment</span>
        </h1>

        

            <Col lg="4" xs="12">
             
            </Col>
      </div>
    );
  }
}

export default DSP;
