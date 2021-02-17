import { CHANGE_OPTIONS, CHANGE_WORD_LIST } from "./constants/actionsTypes";

const initialState = {
  wordCloudOptions: {
    singleColor: true,
    darkColor: false,
    lightColor: false,
    weightFactor: 5,
    backgroundColor: undefined,
    minRotation: 0,
    maxRotation: 0,
    rotateRatio: 0,
    fontFamily: "SimSun",
    fontColor: "",
  },
  wordList: []
};

function wordCloudReducer(state: any = initialState, action: any) {
  if (typeof state === "undefined") {
    return 0;
  }
  switch (action.type) {
    case CHANGE_OPTIONS:
      return { ...state, wordCloudOptions: action.payload };
    case CHANGE_WORD_LIST:
      return { ...state, wordList: action.payload };
    default:
      return state;
  }
}

export default wordCloudReducer;
