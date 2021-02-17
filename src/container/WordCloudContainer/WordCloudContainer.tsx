import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import WordCloudCustom from "../../component/WordCloud/WordCloudCustom";
import WordCloudEditor from "../../component/WordCloudEditor/WordCloudEditor";
import RealTimeEchart from "../../component/Echarts/RealTimeEchart/Echart";

const WordCloudContainer = () => {
  return (
    <Segment placeholder style={{ width: "80%" }}>
      <Grid columns={2} centered stackable>
        <Grid.Column width={12}>
          <div style={{ padding: "3px" }}>
            <WordCloudCustom></WordCloudCustom>
            {/* <WordCloudCustom></WordCloudCustom> */}
          </div>
        </Grid.Column>
        <Grid.Column width={4}>
          <WordCloudEditor></WordCloudEditor>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default WordCloudContainer;
