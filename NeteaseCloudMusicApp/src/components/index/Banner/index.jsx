import React from "react";
import styles from "./index.less";
import CSSModules from "react-css-modules";
import { getBannerList } from "../../../api/indexApi";

class Banner extends React.Component {
  state = {
    carouselData: [{}],
    index: 0,
    hide: false,
  };

  timer = null; // 定时器
  clickTimer = null;
  carouseRef = React.createRef(); //轮播图元素

  /**
   * 获取数据 事件处理
   */
  async componentDidMount() {
    const resp = await getBannerList();
    this.setState({
      ...this.state,
      carouselData: [...resp.banners],
    });

    this.startAutoPlay();

    this.carouseRef.current.addEventListener("mouseenter", () => {
      this.stopAutoPlay();
    });
    this.carouseRef.current.addEventListener("mouseleave", () => {
      this.startAutoPlay();
    });
  }

  componentWillUnmount() {
    this.stopAutoPlay();
    this.carouseRef.current.removeEventListener("mouseenter");
    this.carouseRef.current.removeEventListener("mouseleave");
  }

  /**
   * 启动计时器
   */
  startAutoPlay = () => {
    this.timer = setInterval(() => {
      this.changeIndex((this.state.index + 1) % this.state.carouselData.length);
    }, 3000);
  };

  /**
   * 停止计时器
   */
  stopAutoPlay = () => {
    clearInterval(this.timer);
  };

  /**
   * 改变index值
   * @param {*} index
   */
  changeIndex = (index) => {
    this.setState({
      ...this.state,
      hide: true,
    });
    setTimeout(() => {
      this.setState({
        ...this.state,
        hide: false,
        index: index,
      });
    }, 700);
  };

  /**
   * 获取controlList元素
   * @returns
   */
  getControlList = () => {
    return this.state.carouselData.map((it, id) => {
      return (
        <li
          key={id}
          className={
            id === this.state.index
              ? styles.active + " " + styles["control-item"]
              : styles["control-item"]
          }
          onClick={() => {
            this.changeIndex(id);
          }}
        ></li>
      );
    });
  };

  /**
   * 处理点击事件
   * @param {*} type
   */
  handleClick = (type) => {
    this.stopAutoPlay();
    if (this.clickTimer !== null) {
      clearTimeout(this.clickTimer);
      this.clickTimer = null;
    }
    this.clickTimer = setTimeout(() => {
      this.startAutoPlay();
    }, 1000);
    let newIndex;
    if (type == "add") {
      newIndex = (this.state.index + 1) % this.state.carouselData.length;
    } else {
      newIndex =
        this.state.index - 1 < 0
          ? this.state.carouselData.length - 1
          : this.state.index - 1;
    }
    this.setState({
      ...this.state,
      index: newIndex,
    });
  };

  render() {
    return (
      <div
        className={styles.banner}
        style={{
          backgroundImage: `url(${
            this.state.carouselData[this.state.index].imageUrl
          }?imageView&blur=40x20)`,
        }}
      >
        <div className={styles["banner-content"]}>
          <div className={styles.carousel} ref={this.carouseRef}>
            <img
              src={this.state.carouselData[this.state.index].imageUrl}
              alt=""
              className={this.state.hide ? styles.hide : null}
            />
            <ul className={styles.control}>{this.getControlList()}</ul>
          </div>
          <div className={styles.download}>
            <div className={styles.top}>
              <a href="#"></a>
            </div>
            <div className={styles.bottom}>
              PC 安卓 iPhone WP iPad Mac 六大客户端
            </div>
          </div>
          <div
            className={styles["carousel-left"]}
            onClick={() => {
              this.handleClick("minus");
            }}
          ></div>
          <div
            className={styles["carousel-right"]}
            onClick={() => {
              this.handleClick("add");
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Banner;
