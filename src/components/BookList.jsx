import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";

function BookList({ books }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchValue.toLowerCase()));
  return (
    <Container>
      <div className="my-3 d-flex justify-content-center">
        <span className="fw-bold">Ricerca: </span>
        <input type="text" placeholder="Cerca per titolo..." value={searchValue} onChange={handleSearchChange} />
      </div>
      <Row>
        {filteredBooks.map((book, i) => (
          <SingleBook key={book.asin} item={book} />
        ))}
      </Row>
    </Container>
  );
}

export default BookList;
