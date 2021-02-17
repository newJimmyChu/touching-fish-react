import {
  Grid,
  Segment,
  Radio,
  Input,
  Dropdown,
  Select,
} from "semantic-ui-react";
import { TwitterPicker } from "react-color";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import IWordCloudOptions from "../../data-structure/WordCloudOptions";
import { changeOptions } from "../../redux/wordCloud/wordCloudActions";

import fontFamilyCustom, { fontSizeCustom } from "./fontFamily";

const WordCloudEditor = (props: any) => {
  const [singleColor, setSingleColor] = useState(true);
  const [fontColor, setFontColor] = useState("#5000b8");
  const [darkColor, setDarkColor] = useState(false);
  const [lightColor, setLightColor] = useState(false);
  const [weightFactor, setWeightFactor] = useState(5);
  const [backgroundColor, setBackgroundColor] = useState(undefined);
  const [minRotation, setMinRotation] = useState(0);
  const [rotateRatio, setRotateRatio] = useState(0);
  const [maxRotation, setMaxRotation] = useState(0);
  const [fontFamily, setFontFamily] = useState("SimSun");
  const { dispatchOptions } = props;

  // package new word cloud options and dispatch it to the redux store
  useEffect(() => {
    const newOption: IWordCloudOptions = {
      singleColor: singleColor,
      darkColor: darkColor,
      lightColor: lightColor,
      weightFactor: weightFactor,
      backgroundColor: backgroundColor,
      minRotation: minRotation,
      maxRotation: maxRotation,
      rotateRatio: rotateRatio,
      fontFamily: fontFamily,
      fontColor: fontColor,
    };
    dispatchOptions(newOption);
  }, [
    dispatchOptions,
    singleColor,
    darkColor,
    lightColor,
    weightFactor,
    backgroundColor,
    minRotation,
    rotateRatio,
    maxRotation,
    fontFamily,
    fontColor,
  ]);

  // dark color and light color and single color are mutex
  const onSingleColorClick = () => {
    setLightColor(singleColor);
    setDarkColor(false);
    setSingleColor(!singleColor);
  };

  const onLightColorClick = () => {
    setDarkColor(lightColor);
    setSingleColor(false);
    setLightColor(!lightColor);
  };

  const onDarkColorClick = () => {
    setLightColor(darkColor);
    setSingleColor(false);
    setDarkColor(!darkColor);
  };

  const handleWeightFactorChange = (e: any, data: any) => {
    setWeightFactor(data.value);
  };

  const handleFontFamilyChange = (e: any, data: any) => {
    setFontFamily(data.value);
    console.log(data.value);
  };

  const handleChangeComplete = (color: any) => {
    setFontColor(color.hex);
  };

  return (
    <Segment
      style={{
        height: "100%",
        width: "100%",
        fontFamily: "sans-serif",
      }}
    >
      <Grid celled>
        <Grid.Row divided>
          <Grid.Column
            width={8}
            style={{ display: "flex", alignItems: "center" }}
          >
            单色弹幕{" "}
            <Radio
              toggle
              checked={singleColor}
              style={{ marginLeft: "10px" }}
              onClick={() => onSingleColorClick()}
            />
          </Grid.Column>
        </Grid.Row>

        {/* 单色弹幕颜色 */}
        {singleColor ? (
          <Grid.Row>
            <Grid.Column>
              <TwitterPicker
                color={fontColor}
                onChangeComplete={handleChangeComplete}
              />
            </Grid.Column>
          </Grid.Row>
        ) : null}

        <Grid.Row>
          <Grid.Column
            width={8}
            style={{ display: "flex", alignItems: "center" }}
          >
            亮色弹幕{" "}
            <Radio
              toggle
              checked={lightColor}
              style={{ marginLeft: "10px" }}
              onClick={() => onLightColorClick()}
            />
          </Grid.Column>
          <Grid.Column
            width={8}
            style={{ display: "flex", alignItems: "center" }}
          >
            暗色弹幕{" "}
            <Radio
              toggle
              checked={darkColor}
              style={{ marginLeft: "10px" }}
              onClick={() => onDarkColorClick()}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column
            width={16}
            style={{ display: "flex", alignItems: "center" }}
          >
            弹幕字体
            <Dropdown
              fluid
              selection
              options={fontFamilyCustom}
              onChange={handleFontFamilyChange}
              style={{ width: "150px", marginLeft: "15px" }}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column
            width={16}
            style={{ display: "flex", alignItems: "center" }}
          >
            弹幕字体缩放
            <Dropdown
              fluid
              selection
              options={fontSizeCustom}
              onChange={handleWeightFactorChange}
              style={{ width: "120px", marginLeft: "15px" }}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column
            width={16}
            style={{ display: "flex", alignItems: "center" }}
          >
            旋转比例
            <Input size="mini" style={{ width: "100px", marginLeft: "43px" }} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column
            width={16}
            style={{ display: "flex", alignItems: "center" }}
          >
            最小旋转角度
            <Input size="mini" style={{ width: "100px", marginLeft: "15px" }} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column
            width={16}
            style={{ display: "flex", alignItems: "center" }}
          >
            最大旋转角度
            <Input size="mini" style={{ width: "100px", marginLeft: "15px" }} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column
            width={16}
            style={{ display: "flex", alignItems: "center" }}
          >
            词云字体间隔
            <Input size="mini" style={{ width: "100px", marginLeft: "15px" }} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row></Grid.Row>
      </Grid>
    </Segment>
  );
};

const mapStateToProps = (state: any) => {
  console.log(state.wordCloud.wordCloudOptions);
  return {
    wordCloudOptions: state.wordCloud.wordCloudOptions,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatchOptions: (options: IWordCloudOptions) => {
      dispatch(changeOptions(options));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WordCloudEditor);
