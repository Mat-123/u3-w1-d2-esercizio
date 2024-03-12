import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Component } from "react";
import books from "../data/books/scifi.json";

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <Row>
          {books.map((book, i) => {
            return (
              <Col xs={6} md={4} lg={2}>
                <Card className="my-3">
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.category}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
