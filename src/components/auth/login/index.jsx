import React from "react";
import { StyledLoginContainer } from "./index.styled";
import { Row, Form, Input, Col } from "antd";
import { CustomButton } from "../../_shared/CustomButton";

export const Login = () => {
  return (
    <StyledLoginContainer>
      <div className="login-container">
        <div className="login-text">Login Your Account</div>
        <Form
          name="user-form"
          style={{ width: "100%", margin: "10px 0" }}
          initialValues={{ remember: true }}
          autoComplete="off"
          labelCol={{ span: 0 }}
          wrapperCol={{ span: 24 }}
          className="user-form"
        >
          <Row gutter={[24, 24]}>
            <Col xs={24} xl={24}>
              <Form.Item
                name="data"
                rules={[{ required: true, message: "Please enter username" }]}
                className="user-form-item"
              >
                <div className="label">UserName:</div>
                <Input placeholder="Username" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 24]}>
            <Col xs={24} xl={24}>
              <Form.Item
                name="password"
                rules={[{ required: true, message: "Please enter passowrd" }]}
                className="user-form-item"
              >
                <div className="label">Password:</div>
                <Input placeholder="Password" />
              </Form.Item>
            </Col>
          </Row>
          <CustomButton
            type="primary"
            style={{
              width: "100%",
              background: "#000000",
              borderRadius: 0,
            }}
          >
            Login
          </CustomButton>
        </Form>
      </div>
    </StyledLoginContainer>
  );
};
