import { ToastContainer } from "react-toastify";
import Router from "./routes/routes";
import GlobalStyle from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app">
      <Router />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
