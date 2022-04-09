import React from "react";
import CSSModules from "react-css-modules";
import styles from "./index.less";
import { Link } from "umi";

// 首页标题通用组件
function Title(props) {
  return (
    <div styleName="header">
      <div styleName="title">
        <span styleName="symbol"></span>
        <h1>{props.title}</h1>
      </div>
      {props.children}
      <div styleName="more">
        <Link to={"#"}>更多</Link>
        <span styleName="more-icon"></span>
      </div>
    </div>
  );
}

export default CSSModules(Title, styles);
