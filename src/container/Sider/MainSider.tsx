import "antd/dist/antd.css";
import "./MainSider.css";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  AreaChartOutlined,
  RadarChartOutlined,
  LineChartOutlined,
  DotChartOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import React, {Component} from 'react';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



type State = { collapsed: boolean; };
type Props = { prop: any };

export default class MainSider extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }
  
  toggle = () => {
    const {collapsed} = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  render() {
    const { collapsed } = this.state;
    
    return (
      <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo' />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<AreaChartOutlined />}>
            Bilibili 弹幕分析
          </Menu.Item>
          <Menu.Item key="2" icon={<DotChartOutlined />}>
            Bilibili 弹幕情感分析
          </Menu.Item>
          <Menu.Item key="3" icon={<RadarChartOutlined />}>
            Up主弹幕数据
          </Menu.Item>
          <Menu.Item key="4" icon={<LineChartOutlined />}>
            弹幕趋向性分析
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: this.toggle,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
    );
  }
}