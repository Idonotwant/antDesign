import { Row, Card, Col } from "antd";
import Todos from "./todos";

const TodoList = () => {
  var cols = [{color:"red",num:1},{color:"yellow",num:2},{color:"orange",num:3},{color:"blue",num:4},{color:"green",num:5}];
  return (
    <Row gutter={15}>
      {cols.map(function (ele) {
        return (
          <Col flex={1}>
            <Card title={"第"+ele.num+"天"} bordered={false} style={{background: ele.color}} >
              <Todos id={"123"+ele.num} context="blabla"/>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default TodoList;
