import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import './style.less';

class SideMenu extends Component {
  state = {
    collapsed: false,
  };
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <div className="side-menu">
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="0">
            <div className="logo">
              <h1>Boilerplate</h1>
            </div>
          </Menu.Item>
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>
              <Link to="/home" className="menu-item">
                Home
              </Link>
            </span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>
              <Link to="/about" className="menu-item">
                About
              </Link>
            </span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>
              <Link to="/posts" className="menu-item">
                Publicações
              </Link>
            </span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="inbox" />
            <span>
              <Link to="/contact" className="menu-item">
                Contact
              </Link>
            </span>
          </Menu.Item>
          <Menu.SubMenu
            key="sub1"
            className="submenu"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </div>
    );
  }
}
export default SideMenu;
