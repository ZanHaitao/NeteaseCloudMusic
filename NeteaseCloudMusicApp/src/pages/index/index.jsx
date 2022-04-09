import React from "react";
import Banner from "../../components/index/Banner";
import styles from "./css/index.less";
import HotRecommend from "../../components/index/HotRecommend";
import NewAlbum from "../../components/index/NewAlbum";
import ListContainer from "../../components/index/ListContainer";
/**
 * 首页-推荐
 */
function index() {
  return (
    <>
      <Banner />
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <HotRecommend />
          <NewAlbum />
          <ListContainer />
        </div>
        <div className={styles.right}></div>
      </div>
    </>
  );
}

export default index;
