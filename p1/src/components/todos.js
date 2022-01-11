import { Button,Row,Col } from "antd";
import {CheckCircleOutlined} from "@ant-design/icons"

const Todos = ({id,context}) => {
  return (
    <Row >
      <Col flex={1}>
        <Button type="primary" id={id}>
            <CheckCircleOutlined/>
        </Button>
      </Col>
      <Col flex={4} style={{display:"flex",alignItems:"center"}}>
        <div style={{textAlign:"center" } }>{context}</div>
      </Col>
    </Row>
  );
};

export default Todos;
