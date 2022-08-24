import React from "react";
import { Col, Row } from "antd";

const style = { background: "#0092ff", padding: "8px 0" };

export const Board = () => {
  // life 목숨 3개
  //
  return (
    <div className="flex justify-center flex-col">
      <h1 className="text-3xl text-center text-white pt-16">Level 1</h1>
      <div
        className="board-wrap text-center pt-8 text-center"
        style={{ minWidth: 380, margin: "0 auto" }}
      >
        <Row gutter={8}>
          <Col className="tile" span={12}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="tile" span={12}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="tile mt-2" span={12}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="tile mt-2" span={12}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
