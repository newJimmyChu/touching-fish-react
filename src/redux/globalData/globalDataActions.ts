import { SET_GLOBAL_VIDEO } from "./constants/actionsTypes";
import IVideoInfo from "../../data-structure/VideoInfo";

export function setGlobalVideo(payload: IVideoInfo) {
  return { type: SET_GLOBAL_VIDEO, payload };
}
