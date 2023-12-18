import { Space } from "antd";
import { StyledListItemContainer } from "./index.styled";
import { EditOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";

export const ListItem = (props) => {
  const { label } = props;
  return (
    <StyledListItemContainer>
      <span>{label}</span>
      <span>
        <Space size={15}>
          <EditOutlined style={{ fontSize: "14px", color: "#0091ff" }} />
          <DeleteOutlined style={{ fontSize: "14px", color: "#ff4343" }} />
          {/* <CheckOutlined style={{ fontSize: "14px", color: "#04d104" }} /> */}
        </Space>
      </span>
    </StyledListItemContainer>
  );
};
