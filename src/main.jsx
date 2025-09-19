import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import FetchingApi from "./Context/FetchingApi.jsx";

createRoot(document.getElementById("root")).render(
  <FetchingApi>
    <App />
  </FetchingApi>
);
