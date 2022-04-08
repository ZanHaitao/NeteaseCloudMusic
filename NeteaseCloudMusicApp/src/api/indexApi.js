import axios from "./axios";

/**
 * 获取banner
 * @returns 
 */
export async function getBannerList() {
  return await axios.get("/banner");
}