import React, { useMemo } from "react";
import CSSModules from "react-css-modules";
import styles from "./index.less";
import { Link } from "umi";

/**
 * 榜单列表
 * @returns
 */
function List({ data }) {
  console.log(data);
  const listItem = useMemo(() => {
    return data.tracks.slice(0, 10).map((it, index) => {
      return (
        <dd key={it.id} styleName="list-item">
          <span styleName="number" className={index < 3 ? styles.top : ""}>
            {index + 1}
          </span>
          <Link styleName="title" to={"#"}>
            {it.name}
          </Link>
          <div styleName="icon">
            <i styleName="icon-item"></i>
            <i styleName="icon-item"></i>
            <i styleName="icon-item"></i>
          </div>
        </dd>
      );
    });
  }, [data]);
  return (
    <dl styleName="list-wrapper">
      <dt styleName="list-top">
        <div styleName="image">
          <Link to={"#"}></Link>
          <img src={data.coverImgUrl} alt="" />
        </div>
        <div styleName="info">
          <h1 styleName="title">{data.name}</h1>
          <p styleName="icon-wrapper">
            <i styleName="icon-pay"></i>
            <i styleName="icon-collect"></i>
          </p>
        </div>
      </dt>
      {listItem}
      <dd styleName="list-footer"><Link to={"#"}>查看全部{">"}</Link></dd>
    </dl>
  );
}

export default CSSModules(List, styles);
