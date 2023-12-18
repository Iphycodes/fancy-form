import { Button, Col, Form, Input, Row, Space } from "antd";
import { StyledUserFormContainer } from "./index.styled";
import { DataList } from "./libs/data-list";
import { CustomButton } from "../_shared/CustomButton";
import { DataForm } from "./libs/data-form";

export const UserForm = () => {
  const onFinish = () => {
    console.log("finished");
  };

  return (
    <StyledUserFormContainer>
      <Form
        name="basic"
        style={{ maxWidth: "100%" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        className="user-form"
      >
        <Row gutter={[24, 24]}>
          <Col xs={24} xl={24}>
            <Form.Item
              label="Title"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
              className="user-form-item"
            >
              <Input placeholder="title" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[24, 24]}>
          <Col xs={24} xl={24}>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: "Please enter description" }]}
              className="user-form-item"
            >
              <Input placeholder="description" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col xs={24} xl={24}>
            <div style={{ fontWeight: 600 }}>Add Data</div>
            <hr />
          </Col>
        </Row>
        <DataForm />
        <Row gutter={[24, 24]}>
          {/* <Col xs={4} xl={4}></Col> */}
          <Col xs={24} xl={24}>
            <hr />
          </Col>
        </Row>
        <DataList />
        <Row gutter={[24, 24]}>
          {/* <Col xs={4} xl={4}></Col> */}
          <Col xs={24} xl={24}>
            <CustomButton
              type="primary"
              size="large"
              htmlType="submit"
              style={{
                width: "100%",
                borderRadius: 0,
                backgroundColor: "#000000",
              }}
            >
              Done
            </CustomButton>
          </Col>
        </Row>
      </Form>
    </StyledUserFormContainer>
  );
};
