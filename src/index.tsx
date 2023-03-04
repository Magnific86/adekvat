import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { FeedBackDrawer } from "./components/FeedBackDrawer";
import { MainProvider } from "./MyContext";
import "./styles/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <MainProvider>
    <BrowserRouter>
      <App />
      <FeedBackDrawer />
    </BrowserRouter>
  </MainProvider>
  // </React.StrictMode>
);
