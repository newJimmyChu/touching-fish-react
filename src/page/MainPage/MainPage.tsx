import React, { Component, useState } from "react";
import { Grid, Icon, Menu } from "semantic-ui-react";
import Home from "../Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchBar from "../../component/SearchBar/SearchBar";
import WordCloudContainer from "../../container/WordCloudContainer/WordCloudContainer";

const MainPage = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index: number) => {
    setActiveItem(index);
  };

  return (
    <Router>
      <Grid>
        <Grid.Row centered>
          <SearchBar></SearchBar>
        </Grid.Row>
        <Grid.Row centered>
          <Menu icon="labeled">
            <Menu.Item
              as={Link}
              to="/home"
              name="home"
              active={activeItem === 0}
              onClick={() => handleItemClick(0)}
            >
              <Icon name="non binary transgender" />
              &#8197;首页&#8197;
            </Menu.Item>

            <Menu.Item
              as={Link}
              to="/word-cloud"
              name="word-cloud"
              active={activeItem === 1}
              onClick={() => handleItemClick(1)}
            >
              <Icon name="cloud" />
              Bilibili 弹幕词云
            </Menu.Item>

            <Menu.Item
              as={Link}
              to="/danmaku-analysis"
              name="danmaku-analysis"
              active={activeItem === 2}
              onClick={() => handleItemClick(2)}
            >
              <Icon name="language" />
              Bilibili 弹幕分析
            </Menu.Item>

            <Menu.Item
              as={Link}
              to="/sentiment-analysis"
              name="sentiment-analysis"
              active={activeItem === 3}
              onClick={() => handleItemClick(3)}
            >
              <Icon name="heartbeat" />
              Bilibili 弹幕情感分析
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/trending"
              name="trending"
              active={activeItem === 4}
              onClick={() => handleItemClick(4)}
            >
              <Icon name="file alternate outline" />
              Bilibili 流行性报告
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/user"
              name="user"
              active={activeItem === 5}
              onClick={() => handleItemClick(5)}
            >
              <Icon name="user" />
              用户页面
            </Menu.Item>
          </Menu>
        </Grid.Row>

        <Grid.Row width={16} verticalAlign="middle">
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/word-cloud">
              <Grid.Column style={{ display: "flex", alignItems: "center" }}>
                <WordCloudContainer />
              </Grid.Column>
            </Route>
            <Route path="/danmaku-analysis">
              <Home />
            </Route>
            <Route path="/sentiment-analysis">
              <Home />
            </Route>
            <Route path="/trending">
              <Home />
            </Route>
          </Switch>
        </Grid.Row>
      </Grid>
    </Router>
  );
};

export default MainPage;
