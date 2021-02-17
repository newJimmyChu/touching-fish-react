import * as React from "react";
import ReactEcharts from "echarts-for-react";
import echartOptions from "./echartOptions";

const RealTimeEchart = () => {
  return (
    <ReactEcharts
      option={echartOptions}
      notMerge={true}
      lazyUpdate={true}
      // theme={"theme_name"}
      // onChartReady={this.onChartReadyCallback}
    />
  );
};

export default RealTimeEchart;
