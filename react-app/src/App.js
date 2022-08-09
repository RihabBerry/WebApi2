import "./App.css";
import { store } from "./actions/store";
import { Provider } from "react-redux";
import DCandidates from "./components/DCandidates";
import { useState } from "react";

function App() {
  const data = useState();

  return (
    <Provider store={store}>
      <DCandidates />
    </Provider>
  );
}

export default App;
