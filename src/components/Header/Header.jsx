import { LikeOutlined, LogoutOutlined } from "@ant-design/icons";
import { Col, Menu, Row, Input } from "antd";
import Logo from "../Logo/Logo";
import "./Header.less";

export default function Header({ onChange }) {
  const onSearch = ({ target }) => {
    onChange(target.value);
  };
  return (
    <Menu style={{ padding: "20px", backgroundColor: "#333", margin: 0 }}>
      <Row justify="space-between" align="middle">
        <Col flex="300px" style={{ height: "100px" }}>
          <Logo />
        </Col>
        <Col flex="500px">
          <Input placeholder="Search" onChange={onSearch} />
        </Col>
        <Col flex="150px">
          <LikeOutlined className="icon" />
          <LogoutOutlined className="icon" />
        </Col>
      </Row>
    </Menu>
  );
}
