import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import React, { Component } from "react";

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  render() {
    const { item } = this.props;
    const { selected } = this.state;
    const title = item.title.length > 25 ? item.title.substring(0, 25) + "..." : item.title;
    return (
      <Col xs={6} md={4} lg={2}>
        <Card
          className={`pointer shadow my-3 ${selected ? "border-danger" : ""}`}
          onClick={() => this.setState({ selected: !selected })}
        >
          {" "}
          <div className="bookCardImg">
            <Card.Img variant="top" src={item.img} />
          </div>
          <Card.Body>
            <Card.Title className="mb-3">{title}</Card.Title>
            <div className="d-flex">
              <Card.Text className="me-auto">{item.category}</Card.Text>
              <Card.Text>{item.price}€</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
