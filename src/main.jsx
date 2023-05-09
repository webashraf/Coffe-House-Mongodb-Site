import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AddCoffe from "./Components/AddCoffe/AddCoffe.jsx";
import UpdateCoffe from "./Components/UpdateCoffe/UpdateCoffe.jsx";
import "./index.css";
import Coffee from "./Components/Coffee/Coffee.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Coffee></Coffee>,
        loader: ()=> fetch('http://localhost:5000/coffee'),
      },
      {
        path: "addCoffee",
        element: <AddCoffe></AddCoffe>,
      },
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffe></UpdateCoffe>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
    ]
  },


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
