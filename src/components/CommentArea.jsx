import ListGroup from "react-bootstrap/ListGroup";
import { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

class CommentArea extends Component {
  state = {
    review: [],
    isLoading: true,
    isError: false,
  };

  componentDidMount() {
    this.fetchingReviews(this.props.idBook);
  }

  fetchingReviews = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.idBook}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxYTlhOTRjNTllYzAwMTk5MGQ3NDYiLCJpYXQiOjE3MTA0MjUyMDQsImV4cCI6MTcxMTYzNDgwNH0.99koB15xlPdz2PxT7BSDln1Z4bReegFBmhIfLbs7cxM",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema nella chiamata API");
        }
      })
      .then((reviewsFromAPI) => {
        this.setState({
          review: reviewsFromAPI,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log("ERRORE", error);
        this.setState({
          isLoading: false,
          isError: true,
        });
      });
  };

  render() {
    return (
      <ListGroup>
        {this.state.review.length === 0 && this.state.isLoading === false && this.state.isError === false && (
          <ListGroup.Item>Al momento non ci sono recensioni.</ListGroup.Item>
        )}

        {this.state.isLoading === true && (
          <div>
            <Spinner animation="border" variant="success" />
          </div>
        )}

        {this.state.isError === true && (
          <div>
            <Alert variant="danger">Qualcosa è andato storto! Riprova tra qualche momento.</Alert>
          </div>
        )}

        {this.state.review.map((review) => {
          return (
            <ListGroup.Item key={review._id}>
              <div className="d-flex justify-content-between">
                <span>{review.comment}</span>

                <span>Rating: {review.rate}/5</span>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  }
}

export default CommentArea;
