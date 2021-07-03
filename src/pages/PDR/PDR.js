import React from "react";
import {
  Col,
} from "reactstrap";

import s from "./PDR.module.scss";

class PDR extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <h2 className="page-title">
        Predicting Doses For <span className="fw-semi-bold">Remedies</span>
        </h2>
          <Col lg={6} md={12} sm={12}>
          </Col>
          
      </div>
    );
  }
}

export default PDR;
