import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

export const Home = () => {
  return (
    <div className="flex justify-center flex-col">
      <h1 className="text-3xl text-center pt-16">색상 구분 테스트</h1>
      <p className="text-center mb-2">당신의 미적감각은 어느정도인가요?</p>
      {/*
      <AdSense.Google
        style={{ display: "block" }}
        client="ca-pub-9130836798889522"
        slot="7740004665"
        format="auto"
        responsive="true"
      /> */}
      <div className="text-center mt-2">
        <Button style={{ width: 336 }} type="primary" size="large">
          <Link to="/board">START</Link>
        </Button>
      </div>
    </div>
  );
};
