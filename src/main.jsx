import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {Home} from "./routes/pages/Home/Index.jsx";
import {About} from "./routes/pages/About/index.jsx";
import ErrorPage from "./routes/error-page.jsx";
import {List} from "./routes/pages/List/index.jsx";

//import do router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//paginas que o router controla
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "List",
    element: <List/>,
  },
  {
    path:  "About",
    element: <About/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);