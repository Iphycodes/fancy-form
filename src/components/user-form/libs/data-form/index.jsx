import { Col, Form, Input, Row } from "antd";
import { CustomButton } from "../../../_shared/CustomButton";

export const DataForm = () => {
  return (
    <Form
      name="user-form"
      style={{ maxWidth: "100%", margin: "10px 0" }}
      initialValues={{ remember: true }}
      autoComplete="off"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      className="user-form"
    >
      <Row gutter={[24, 24]}>
        <Col xs={24} xl={24}>
          <Form.Item
            label="Data Id"
            name="data"
            // rules={[{ required: true, message: "Please enter description" }]}
            className="user-form-item"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 5,
                minWidth: "100%",
              }}
            >
              <Input placeholder="Enter a data" />
            </div>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col xs={24} xl={24}>
          <Form.Item
            label="Data description"
            name="data"
            // rules={[{ required: true, message: "Please enter description" }]}
            className="user-form-item"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 5,
                minWidth: "100%",
              }}
            >
              <Input placeholder="Enter a data" />
            </div>
          </Form.Item>
        </Col>
      </Row>
      <CustomButton
        type="primary"
        style={{
          background: "#000000",
          borderRadius: 0,
        }}
      >
        Add
      </CustomButton>
    </Form>
  );
};
