import React, { Component, useState } from "react";
import { Grid, Icon, Menu } from "semantic-ui-react";
import Home from "../Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const MainPage = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index: number) => {
    setActiveItem(index);
  };

  return (
    <Router>
      <Grid style={{ height: "101vh" }}>
        <Grid.Column width={2} color="black">
          <Menu icon="labeled" vertical inverted fluid size="large">
            <Menu.Item
              name="header"
              style={{ height: "60px", textAlign: "center" }}
            >
              <div>Bilibili 弹幕分析助手</div>
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/home"
              name="home"
              active={activeItem === 0}
              onClick={() => handleItemClick(0)}
            >
              <Icon name="cloud" />
              首页
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
        </Grid.Column>

        <Grid.Column width={12}>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/word-cloud">
              <Home />
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
        </Grid.Column>
      </Grid>
    </Router>
  );
};

export default MainPage;
