import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <MyNav subtitle="The Best Online Library!" />
      <MyFooter />
    </>
  );
}

export default App;
