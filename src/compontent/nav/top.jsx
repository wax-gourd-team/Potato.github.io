import React, {Component} from "react";
import {Breadcrumb, Menu} from "antd";
import "./index.scss";
const menu = (
  <Menu>
    <Menu.Item>
      <a>General</a>
    </Menu.Item>
    <Menu.Item>
      <a>Layout</a>
    </Menu.Item>
    <Menu.Item>
      <a>s</a>
    </Menu.Item>
  </Menu>
);
export default class Top extends Component {
  render() {
    return (
      <div>
        <Breadcrumb className="box-hh" separator="">
          <Breadcrumb.Item overlay={menu}>
            <a href="">AE资源</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item overlay={menu}>
            <a href="">软件插件</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item overlay={menu}>
            <a href="">素材</a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}
