import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// const initialReview = {
//   comment: "",
//   rate: "",
//   author: "",
//   elementId: this?.props?.asin,
// };

class AddComment extends Component {
  state = {
    review: { comment: "", rate: "", author: "", elementId: "" },
  };

  handleReviewSubmit = (e) => {
    e.preventDefault();

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST", // uso POST per creare una nuova risorsa
      body: JSON.stringify({ ...this.state.review, elementId: this.props.asin }),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxYTlhOTRjNTllYzAwMTk5MGQ3NDYiLCJpYXQiOjE3MTA0MjUyMDQsImV4cCI6MTcxMTYzNDgwNH0.99koB15xlPdz2PxT7BSDln1Z4bReegFBmhIfLbs7cxM",
      },
    })
      .then((res) => {
        if (res.ok) {
          window.alert("Recensione salvata correttamente, grazie.");
          this.setState({
            review: { comment: "", rate: "", author: "", elementId: "" },
          });
        } else {
          window.alert("Errore, riprova più tardi!");
          throw new Error("Errore nel salvataggio della recensione, riprova piu tardi.");
        }
      })
      .catch((error) => {
        console.log("Errore", error);
      });
  };

  render() {
    return (
      <>
        <h2 className="text-center mt-3">Scrivi la tua recensione</h2>
        <Form onSubmit={this.handleReviewSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Il tuo commento</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci il tuo commento"
              required
              onChange={(e) =>
                this.setState({
                  review: {
                    ...this.state.review,
                    comment: e.target.value,
                  },
                })
              }
              value={this.state.review.comment}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Seleziona un rating:</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                this.setState({
                  review: {
                    ...this.state.review,
                    rate: e.target.value,
                  },
                });
              }}
              value={this.state.review.rate}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Il tuo nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci il tuo nome"
              required
              onChange={(e) =>
                this.setState({
                  review: {
                    ...this.state.review,
                    author: e.target.value,
                  },
                })
              }
              value={this.state.review.author}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Send Review!
          </Button>
        </Form>
      </>
    );
  }
}

export default AddComment;
