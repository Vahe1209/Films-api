import { LikeOutlined, LogoutOutlined } from "@ant-design/icons";
import { Col, Menu, Row, Input } from "antd";
import Logo from "../Logo/Logo";
import "./Header.less";

export default function Header({ onChange }) {
  const onSearch = ({ target }) => {
    onChange(target.value);
  };
  return (
    <Menu
      style={{
        padding: "20px",
        backgroundColor: "hsl(0deg 0% 0% / 40%)",
        margin: 0,
      }}
    >
      <Row
        justify="space-between"
        align="middle"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Col
          flex="300px"
          style={{
            height: "100px",
            marginTop: "15px",
          }}
        >
          <Logo />
        </Col>
        <Col flex="400px">
          <Input
            style={{
              width: "100%",
              height: "30px",
              borderRadius: "15px",
              padding: "5px",
              border: "2px solid black",
            }}
            placeholder="Search"
            onChange={onSearch}
          />
        </Col>
        <Col
          flex="300px"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <LikeOutlined style={{ fontSize: "50px" }} />
          <LogoutOutlined style={{ fontSize: "50px" }} />
        </Col>
      </Row>
    </Menu>
  );
}
