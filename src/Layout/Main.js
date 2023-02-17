import React from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";
import "./Main.css";
import Homebanner from "../Component/Homebanner/Homebanner";
import Leftsidevar from "../Component/Leftsidevar/Leftsidevar";
import BigFooter from "../Component/BigFooter/BigFooter";
import Smallfooter from "../Component/Smallfooter/Smallfooter";
const Main = () => {
  return (
    <div>
      <Header></Header>
      <Homebanner></Homebanner>
      <container>
        <Row className="row">
          <Col lg="9" className="col">
            <Outlet></Outlet>
          </Col>
          <Col lg="3" className="col">
            <Leftsidevar></Leftsidevar>
          </Col>
        </Row>
      </container>
      <Smallfooter></Smallfooter>
      <BigFooter></BigFooter>
    </div>
  );
};

export default Main;
