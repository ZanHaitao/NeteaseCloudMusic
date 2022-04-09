import React, { useEffect, useState, useMemo } from "react";
import CSSModules from "react-css-modules";
import styles from "./index.less";
import { getHotTypeList, getPersonalized } from "@/api/indexApi.js";
import { Link } from "umi";
import Title from "../Title";

function HotRecommend() {
  const [typeData, setTypeData] = useState([]);
  const [personalized, setPersonalized] = useState([]);

  useEffect(() => {
    getHotTypeList().then((resp) => {
      setTypeData(resp.tags.slice(0, 5));
    });
    getPersonalized().then((resp) => {
      setPersonalized(resp.result);
    });
  }, []);

  /**
   * 获取热歌类型元素
   */
  const typeList = useMemo(() => {
    return typeData.map((it, index) => {
      return (
        <li styleName="type-item" key={index}>
          <Link to={"/"}>{it.name}</Link>
        </li>
      );
    });
  }, [typeData]);

  /**
   * 获取热门歌单
   */
  const personalizedList = useMemo(() => {
    return personalized.map((it, index) => {
      return (
        <div styleName="personalized-item" key={index}>
          <div styleName="image">
            <Link to={"#"}></Link>
            <img src={it.picUrl} />
            <div styleName="info">
              <i styleName="icon-headset"></i>
              <span styleName="pay-count">{getCountStr(it.playCount)}</span>
              <i styleName="icon-pay"></i>
            </div>
          </div>
          <h2 styleName="title">
            <Link to={"#"}>{it.name}</Link>
          </h2>
        </div>
      );
    });
  }, [personalized]);
  return (
    <div styleName="hot">
      <Title title="热门推荐">
        <ul styleName="type">{typeList}</ul>
      </Title>
      <div styleName="personalized">
        {personalized.length === 0 ? null : personalizedList}
      </div>
    </div>
  );
}

// 辅助函数 计算播放数量
function getCountStr(count) {
  return parseFloat(count / 10000).toFixed(1) + "万";
}

export default CSSModules(HotRecommend, styles);
