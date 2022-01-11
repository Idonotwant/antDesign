import { ScheduleOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import React from "react";
import TodoList from "./TodoList";
import CourseList from "./CourseList";

const UserContent = () => {
  const [Current, SetCurrent] = useState("Todo");
  const handleClick = (e) => {
    console.log("clicked: ", e);
    SetCurrent(e.key);
  };
  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[Current]} mode="horizontal">
        <Menu.Item key="Todo" icon={<ScheduleOutlined />}>
          TODOs
        </Menu.Item>
        <Menu.Item key="Course" icon={<AppstoreOutlined />}>
          COURSEs
        </Menu.Item>
      </Menu>
      {Current === "Todo" ? <TodoList /> : <CourseList />}
    </div>
  );
};

export default UserContent;
