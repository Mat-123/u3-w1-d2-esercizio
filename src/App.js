import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
// import Welcome from "../src/components/Welcome";
// import AllTheBooks from "../src/components/AllTheBooks";
import BookList from "./components/BookList";
import books from "./data/books/fantasy.json";

function App() {
  return (
    <>
      {/* <Welcome /> */}
      <MyNav subtitle="The Best Online Library!" />
      <BookList books={books} />
      {/* <AllTheBooks /> */}
      <MyFooter />
    </>
  );
}

export default App;
