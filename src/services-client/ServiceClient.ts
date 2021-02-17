import axios, { AxiosResponse } from "axios";
import store from "../redux/store";
import { setGlobalVideo } from "../redux/globalData/globalDataActions";
import IVideoInfo from "../data-structure/VideoInfo";
import { changeWordList } from "../redux/wordCloud/wordCloudActions";

class ServiceClient {
  options: any = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    },
  };

  // Search a video by bvid or cid, then set global videoInfo to the search result
  getVideoInfo = async (id: string) => {
    if (id.startsWith("BV") || id.startsWith("bv")) {
      axios
        .get(`http://118.31.39.168/api/video/bvid/${id}`, this.options)
        .then((resp: AxiosResponse) => {
          if (resp.status !== 200) {
            console.log("Get video info success! bvid");
            store.dispatch(setGlobalVideo(resp.data as IVideoInfo));
          } else {
            console.log("Response error, error code:", resp.status);
          }
          console.log(resp.data);
        });
    } else {
      axios
        .get(`http://118.31.39.168/api/video/cid/${id}`, this.options)
        .then((resp: AxiosResponse) => {
          if (resp.status === 200) {
            console.log("Get video info success! cid");
            store.dispatch(setGlobalVideo(resp.data as IVideoInfo));
            this.getWordCloudData(id);
          } else {
            console.log("Response error, error code:", resp.status);
          }
          console.log(resp.data);
        });
    }
  };

  // Get word cloud data from be, then set the global word cloud state with that data
  getWordCloudData = async (id: string) => { 
      axios
      .get(
        `http://118.31.39.168/api/MostFrequentWords/search/cids?cids=${id}`,
        this.options
      )
      .then((resp: AxiosResponse) => {
        if (resp.status === 200) {
          console.log("getWordCloudData success! cid");
          const wordList: any[][] = [];
          Object.keys(resp.data).forEach((key: any) => {
            wordList.push([key as string, resp.data[key]]);
          });
          console.log(wordList);
          store.dispatch(changeWordList(wordList));
        } else {
          console.log("Response error, error code:", resp.status);
        }
        console.log(resp.data);
      });
  };
}

export default ServiceClient;
