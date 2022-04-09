import axios from "./axios";

/**
 * 获取banner
 * @returns 
 */
export async function getBannerList() {
  return await axios.get("/banner");
}

/**
 * 获取热歌分类
 * @returns 
 */
export async function getHotTypeList() {
  return await axios.get("/playlist/hot");
}

/**
 * 获取热门歌单
 * @param {*} limit 
 */
export async function getPersonalized(limit = 8) {
  return await axios.get("/personalized", {
    params: {
      limit,
    }
  })
}

/**
 * 获取新碟上架
 * @param {*} options 
 * @returns 
 */
export async function getAlbum(options) {
  return await axios.get("/top/album", {
    params: {
      ...options
    }
  })
}

/**
 * 获取所有榜单
 * @returns 
 */
export async function getToplist() {
  return await axios.get("/toplist")
}

/**
 * 通过id获取歌单详情
 * @param {*} id 
 * @returns 
 */
export async function getPlayListDetail(id) {
  return await axios.get("/playlist/detail", {
    params: {
      id
    }
  })
}