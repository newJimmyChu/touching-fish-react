import { combineReducers, createStore } from 'redux';
import wordCloudReducer from "./wordCloud/wordCloudReducer";
import globalDataReducer from "./globalData/globalDataReducer"

const rootReducer = combineReducers({wordCloud: wordCloudReducer, globalData: globalDataReducer});

const store = createStore(rootReducer);

export default store;