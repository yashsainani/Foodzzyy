import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import styles from "./App.module.css";
import Layout from "./Containers/Layout/Layout";
import Home from "./Containers/Home/Home";
import Reviews from "./Containers/Reviews/Reviews";
import Cart from "./Containers/Cart/Cart";
import Login from "./Containers/Login/Login";
import Loader from "./Containers/Loader/Loader";
import store from "./Store";
import DynamicRestros from "./Components/DynamicRestros/DynamicRestros";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/reviews",
          element: <Reviews />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/loading",
          element: <Loader />,
        },
        {
          path: "/restro/:id",
          element: <DynamicRestros />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;