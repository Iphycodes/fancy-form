import { Button } from "antd";

export const CustomButton = (props) => {
  const { children, type, htmlType, size, style } = props;
  return (
    <Button type={type} htmlType={htmlType} size={size} style={{ ...style }}>
      {children}
    </Button>
  );
};
