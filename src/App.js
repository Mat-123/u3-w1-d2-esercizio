import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "../src/components/Welcome";
import AllTheBooks from "../src/components/AllTheBooks";

function App() {
  return (
    <>
      <Welcome />
      <MyNav subtitle="The Best Online Library!" />
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;
