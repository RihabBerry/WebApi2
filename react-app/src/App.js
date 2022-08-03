import "./App.css";
import { store } from "./actions/store";
import { Provider } from "react-redux";
import DCandidates from "./components/DCandidates";
import DCandidateForm from "./components/DCandidateForm";

function App() {
  return (
    <Provider store={store}>
      <DCandidates />
      <DCandidateForm />
    </Provider>
  );
}

export default App;
