import React, { useState, useEffect, useRef, useMemo } from "react";
import Title from "../Title";
import styles from "./index.less";
import CSSModules from "react-css-modules";
import { getAlbum } from "@/api/indexApi";
import { Link } from "umi";

const distance = 645;
let currentDistance = -645;
let clickType = "";
let timer = false;

/**
 * 新碟上架
 * @returns 
 */
function NewAlbum() {
  const [album, setAlbum] = useState([]);
  const albumRef = useRef();

  useEffect(() => {
    getAlbum({ type: "hot" }).then((resp) => {
      let data = resp.weekData.slice(0, 10);
      data = [...data.slice(5), ...data, ...data.slice(0, 5)];
      setAlbum(data);
    });

    albumRef.current.style.left = `${currentDistance}px`;
    albumRef.current.addEventListener("transitionend", handleTransition);
    return () => {
      albumRef.current.removeEventListener("transitionend", handleTransition);
    };
  }, []);

  /**
   * 处理点击事件
   * @param {*} type
   * @returns
   */
  const handleClick = useMemo(() => {
    return (type) => {
      if (timer) {
        return;
      }
      timer = true;
      clickType = type;
      if (type === "left") {
        // 向左移动
        currentDistance += distance;
      } else {
        // 向右移动
        currentDistance -= distance;
      }
      albumRef.current.style.left = `${currentDistance}px`;
    };
  }, []);

  /**
   * 处理过渡动画
   */
  const handleTransition = useMemo(() => {
    return () => {
      if (currentDistance === 0 || currentDistance === -3 * distance) {
        if (clickType === "left") {
          currentDistance = -distance * 2;
        } else {
          currentDistance = -distance;
        }
        albumRef.current.style.transition = "none";
        albumRef.current.style.left = `${currentDistance}px`;
        setTimeout(() => {
          albumRef.current.style.transition = "all .5s";
          timer = false;
        });
      } else {
        timer = false;
      }
    };
  }, []);

  /**
   * 获取新碟列表元素
   */
  const albumItemList = useMemo(() => {
    if (album.length === 0) {
      return null;
    }
    return album.map((it,index) => {
      return (
        <li styleName="album-item" key={index}>
          <div styleName="image">
            <Link to={"#"}></Link>
            <img src={it.picUrl} alt="" />
            <i styleName="icon-pay"></i>
          </div>
          <div styleName="title">
            <h3 styleName="title-primary">{it.name}</h3>
            <h4 styleName="title-minor">{it.company ? it.company : "-"}</h4>
          </div>
        </li>
      );
    });
  }, [album]);

  return (
    <div styleName="album">
      <Title title="新碟上架" />
      <div styleName="album-wrapper">
        <i
          styleName="icon-left"
          onClick={() => {
            handleClick("left");
          }}
        ></i>
        <i
          styleName="icon-right"
          onClick={() => {
            handleClick("right");
          }}
        ></i>
        <div styleName="album-list">
          <ul styleName="album-container" ref={albumRef}>
            {albumItemList}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CSSModules(NewAlbum, styles);
