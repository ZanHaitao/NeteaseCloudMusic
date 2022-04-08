import CSSModules from "react-css-modules";
import styles from "./index.less";
import React, { useState } from "react";
import { NavLink, Link } from "umi";

/**
 * Header 组件 显示顶部标题
 * @returns
 */
function Header() {
  const [search, setSearch] = useState(""); // 搜索关键词

  return (
    <div styleName="header">
      <div styleName="wrapper">
        {/* logo */}
        <div styleName="logo">
          <a href="#"></a>
        </div>
        {/* nav */}
        <ul styleName="nav">
          <li styleName="nav-item">
            <NavLink activeClassName={styles.active} to={"/index"}>
              发现音乐
            </NavLink>
          </li>
          <li styleName="nav-item">
            <NavLink activeClassName={styles.active} to={"/myMusic"}>
              我的音乐
            </NavLink>
          </li>
          <li styleName="nav-item">
            <NavLink activeClassName={styles.active} to={"/attention"}>
              关注
            </NavLink>
          </li>
          <li styleName="nav-item">
            <NavLink activeClassName={styles.active} to={"/shop"}>
              商城
            </NavLink>
          </li>
          <li styleName="nav-item">
            <NavLink activeClassName={styles.active} to={"/musicPeople"}>
              音乐人
            </NavLink>
          </li>
          <li styleName="nav-item">
            <NavLink activeClassName={styles.active} to={"/download"}>
              下载客户端
            </NavLink>
            <span styleName="hot"></span>
          </li>
        </ul>
        {/* search */}
        <div styleName="search">
          <input
            type="text"
            placeholder="音乐/视频/电台/用户"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <div styleName="framer">创作者中心</div>
        <div styleName="login">
          <Link to={"login"}>登录</Link>
        </div>
      </div>
    </div>
  );
}

export default CSSModules(Header, styles);
