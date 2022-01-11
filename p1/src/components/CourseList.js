import { Button, Card, Col, Drawer, Menu, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;
const handleClick = (e) => {
  console.log(e);
};
const openForm = (e) => {
  console.log(e);
};
const CourseList = () => {
  return (
    <Row id="courseList">
      <Col>
        <Menu
          onClick={handleClick}
          style={{ width: 256 }}
          mode="inline"
          theme="dark"
        >
          {/* <Menu.Item key="addmore">
            <Button type="default" onClick={openForm} icon={<PlusOutlined/>}></Button>
          </Menu.Item> */}
          <SubMenu
            title={
              <>
                <Button
                  type="primary"
                  onClick={openForm}
                  icon={<PlusOutlined />}
                >
                  Math
                </Button>
                <Drawer title="Create a new Todo"></Drawer>
              </>
            }
          >
            <Menu.ItemGroup key="g1" title="Step1">
              <Menu.Item key="1">todo1</Menu.Item>
              <Menu.Item Key="2">todo2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="Step2">
              <Menu.Item key="3">todo3</Menu.Item>
              <Menu.Item Key="4">todo4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Col>
      <Col>
        <Menu
          onClick={handleClick}
          style={{ width: 256 }}
          mode="inline"
          theme="dark"
        >
          <SubMenu
            title={
              <Button type="primary" onClick={openForm} icon={<PlusOutlined />}>
                Chinese
              </Button>
            }
          >
            <Menu.ItemGroup key="g1" title="Step1">
              <Menu.Item key="1">todo1</Menu.Item>
              <Menu.Item Key="2">todo2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="Step2">
              <Menu.Item key="3">todo3</Menu.Item>
              <Menu.Item Key="4">todo4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Col>
      <Col>
        <Menu
          onClick={handleClick}
          style={{ width: 256 }}
          mode="inline"
          theme="dark"
        >
          <SubMenu
            title={
              <Button type="primary" onClick={openForm} icon={<PlusOutlined />}>
                Programing
              </Button>
            }
          >
            <Menu.ItemGroup key="g1" title="Step1">
              <Menu.Item key="1">todo1</Menu.Item>
              <Menu.Item Key="2">todo2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="Step2">
              <Menu.Item key="3">todo3</Menu.Item>
              <Menu.Item Key="4">todo4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Col>
    </Row>
  );
};

export default CourseList;
