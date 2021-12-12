import { Button, PageHeader, Dropdown, Menu } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { UserOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

const UserHeader = () => {
  return (
    <PageHeader
      title="NOTee"
      subTitle="Best online note"
      extra={[
        <Button key="2">Login</Button>,
        <Button type="primary" key="1">
          SignUp
        </Button>,
        <Dropdown.Button
          type="text"
          key="more"
          overlay={menu}
          icon={<UserOutlined />}
        >
          UserName
        </Dropdown.Button>,
      ]}
    ></PageHeader>
  );
};

export default UserHeader;
