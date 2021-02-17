import IVideoInfo from "../../data-structure/VideoInfo";
import { SET_GLOBAL_VIDEO } from "./constants/actionsTypes";
import { setGlobalVideo } from "./globalDataActions";

const initialState = {
  globalVideo: {},
};

function globalDataReducer(state: any = initialState, action: any) {
  if (typeof state === "undefined") {
    return 0;
  }
  switch (action.type) {
    case SET_GLOBAL_VIDEO:
      return { ...state, globalVideo: action.payload };
    default:
      return state;
  }
}

export default globalDataReducer;
