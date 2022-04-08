import React from "react";
import { NavLink } from "umi";
import styles from "./index.less";
import CSSModules from "react-css-modules";

function NavTopBar() {
  return (
    <div styleName="nav-bar">
      <ul styleName="nav">
        <li styleName="nav-item">
          <NavLink exact activeClassName={styles.active} to={"/index"}>
            推荐
          </NavLink>
        </li>
        <li styleName="nav-item">
          <NavLink exact activeClassName={styles.active} to={"/index/toplist"}>
            排行榜
          </NavLink>
        </li>
        <li styleName="nav-item">
          <NavLink exact activeClassName={styles.active} to={"/index/playlist"}>
            歌单
          </NavLink>
          <span styleName="icon"></span>
        </li>
        <li styleName="nav-item">
          <NavLink exact activeClassName={styles.active} to={"/index/djradio"}>
            主播电台
          </NavLink>
        </li>
        <li styleName="nav-item">
          <NavLink exact activeClassName={styles.active} to={"/index/artist"}>
            歌手
          </NavLink>
        </li>
        <li styleName="nav-item">
          <NavLink exact activeClassName={styles.active} to={"/index/album"}>
            新碟上架
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default CSSModules(NavTopBar, styles);
