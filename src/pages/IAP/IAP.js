import React from "react";
import {
  Col,
} from "reactstrap";

import s from "./IAP.module.scss";

class IAP extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <h2 className="page-title">
        Image After-Processing & <span className="fw-semi-bold">Diseases Identification</span>
        </h2>
          <Col lg={6} md={12} sm={12}>
          </Col>
          
      </div>
    );
  }
}

export default IAP;
