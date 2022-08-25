import React, { useRef, useLayoutEffect, useState } from "react";
import { Col, Row } from "antd";
import { stages, boardWidth, totalSpan } from "./assets/stage";

const gutter = 8;

export const Board = () => {
  const tileRef = useRef();

  // const [width, setWidth] = useState(0);
  const [timer, setTimer] = useState(20);
  const [height, setHeight] = useState(0);
  const [marginTop, setMarginTop] = useState(0);

  const [stage, setStage] = useState(stages[0]);

  const doNextStage = () => {
    setStage(stages[stage.level]);
  };

  const doClick = (i) => {
    if (i === stage.answerKey) {
      doNextStage();
      // alert("success");
    } else {
      console.log(i);
    }
  };

  const drawTile = (stage, tileRef, height, marginTop) => {
    let t = [];
    for (let i = 0; i < stage.tileNumber * stage.tileNumber; i++) {
      t.push(
        <Col
          key={i}
          className="tile"
          ref={tileRef}
          span={totalSpan / stage.tileNumber}
          onClick={() => doClick(i)}
        >
          <div
            className="tile-inner"
            style={{
              marginTop: `${marginTop}px`,
              height: `${height}px`,
              backgroundColor:
                stage.answerKey === i ? stage.answerColor : stage.normalColor,
            }}
          ></div>
        </Col>
      );
    }
    return t;
  };

  useLayoutEffect(() => {
    const tileWidth = tileRef.current.offsetWidth - gutter;
    setHeight(tileWidth);

    const marginTop = boardWidth - tileWidth * stage.tileNumber;
    setMarginTop(marginTop / (stage.tileNumber - 1));

    // setInterval(() => {
    //   setTimer(timer - 1);
    // }, 1000);
  }, [stage]);
  // life 목숨 3개

  //
  return (
    <div className="flex justify-center flex-col">
      <h1 className="text-3xl text-center text-white pt-16">
        Level {stage.level}
      </h1>
      <div className="text-2xl text-center text-orange-300 pt-4">{timer}</div>
      <div
        className="board-wrap text-center pt-4 text-center"
        style={{
          minWidth: boardWidth,
          minHeight: boardWidth,
          margin: "0 auto",
        }}
      >
        <Row gutter={gutter}>{drawTile(stage, tileRef, height, marginTop)}</Row>
      </div>
    </div>
  );
};
