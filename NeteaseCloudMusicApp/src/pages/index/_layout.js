import React from "react";
import NavTopBar from "../../components/index/NavTopBar";

function index(props) {
  return (
    <div className="index-wrapper">
      <NavTopBar />
      <div className="contaner">{props.children}</div>
    </div>
  );
}
index.title = "网易云音乐";
export default index;
