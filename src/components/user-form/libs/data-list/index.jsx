import { Col, Row } from "antd";
import "./index.styled";
import { DataListContainer } from "./index.styled";
import { ListItem } from "./libs/list-item";

export const DataList = () => {
  return (
    <DataListContainer>
      <Row className="data-list-container" gutter={[24, 24]}>
        {/* <Col xs={4} xl={4}></Col> */}
        <Col xs={24} xl={24}>
          <div style={{ fontSize: "18px" }}>Data</div>
          <ul>
            <li>
              <ListItem label={"Rice"} />
            </li>
            <li>
              <ListItem label={"Beans"} />
            </li>
            <li>
              <ListItem label={"Spagetti"} />
            </li>
          </ul>
        </Col>
      </Row>
    </DataListContainer>
  );
};
