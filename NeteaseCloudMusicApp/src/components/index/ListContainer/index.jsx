import React, { useState, useEffect } from "react";
import Title from "../Title";
import CSSModules from "react-css-modules";
import styles from "./index.less";
import { getToplist, getPlayListDetail } from "@/api/indexApi";
import List from "../List";

/**
 * 榜单展示
 * @returns
 */
function ListContainer() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await getToplist();
      const listData = resp.list.filter((it) => {
        return (
          it.name === "飙升榜" || it.name === "新歌榜" || it.name === "原创榜"
        );
      });
      const resultData = [];
      for (let i = 0; i < listData.length; i++) {
        const detail = await getPlayListDetail(listData[i].id);
        resultData.push(detail.playlist);
      }
      setResult(resultData);
    })();
  }, []);

  return (
    <div styleName="list-container">
      <Title title="榜单" />
      {result.length === 0 ? null : (
        <div styleName="list-wrapper">
          <div styleName="list-item">
            <List data={result[0]} />
          </div>
          <div styleName="list-item">
            <List data={result[1]} />
          </div>
          <div styleName="list-item">
            <List data={result[2]} />
          </div>
        </div>
      )}
    </div>
  );
}

export default CSSModules(ListContainer, styles);
