import React, { useRef, useLayoutEffect, useState } from "react";
import { Col, Row } from "antd";

export const Board = () => {
  const tileRef = useRef();

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useLayoutEffect(() => {
    const tileWidth = tileRef.current.offsetWidth;
    console.log(tileRef.current.offsetWidth);
    setHeight(tileWidth);
  }, []);
  // life 목숨 3개

  //
  return (
    <div className="flex justify-center flex-col">
      <h1 className="text-3xl text-center text-white pt-16">Level 1</h1>
      <div
        className="board-wrap text-center pt-8 text-center"
        style={{
          minWidth: 480,
          minHeight: 480,
          margin: "0 auto",
        }}
      >
        <Row gutter={8}>
          <Col
            className="tile"
            ref={tileRef}
            span={12}
            onClick={() => alert(1)}
          >
            <div className="tile-inner" style={{ height: `${height}px` }}></div>
          </Col>
          <Col className="tile" span={12}>
            <div className="tile-inner" style={{ height: `${height}px` }}></div>
          </Col>
          <Col className="tile mt-2" span={12}>
            <div className="tile-inner" style={{ height: `${height}px` }}></div>
          </Col>
          <Col className="tile mt-2" span={12}>
            <div className="tile-inner" style={{ height: `${height}px` }}></div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
