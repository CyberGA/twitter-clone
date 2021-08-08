import React from "react";
import Main from "../../layouts/Main";
import Navigation from "../../layouts/navigation";
import Sidebar from "../../layouts/sidebar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import style from "./style.module.scss";

export default function Home() {
  return (
    <>
      <Container fluid>
        <Row className={style.container}>
          <Col xs={12} sm={3} lg={3}>
            <Navigation />
          </Col>
          <Col xs={12} sm={9} lg={5}>
            <Main />
          </Col>
          <Col xs={12} sm={3} lg={4}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
}
