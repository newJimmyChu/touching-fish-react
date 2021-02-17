import { CHANGE_OPTIONS, CHANGE_WORD_LIST } from "./constants/actionsTypes";
import IWordCloudOptions from "../../data-structure/WordCloudOptions";

export function changeOptions(payload: IWordCloudOptions) {
  return { type: CHANGE_OPTIONS, payload };
}

export function changeWordList(payload: any) {
  return { type: CHANGE_WORD_LIST, payload };
}
