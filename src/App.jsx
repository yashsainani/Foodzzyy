import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import styles from "./App.module.css";
import Layout from "./Containers/Layout/Layout";
// import Home from "./Containers/Home/Home";
// import Reviews from "./Containers/Reviews/Reviews";
// import Cart from "./Containers/Cart/Cart";
import Login from "./Containers/Login/Login";
// import DynamicRestros from "./Components/DynamicRestros/DynamicRestros";
import Loader from "./Containers/Loader/Loader";

// const Layout = React.lazy(() => import('./Containers/Layout/Layout'));
const Home = React.lazy(() => import('./Containers/Home/Home'));
const Reviews = React.lazy(() => import('./Containers/Reviews/Reviews'));
const Cart = React.lazy(() => import('./Containers/Cart/Cart'));
// const Login = React.lazy(() => import('./Containers/Login/Login'));
const DynamicRestros = React.lazy(() => import('./Components/DynamicRestros/DynamicRestros'));
// const Loader = React.lazy(() => import('./Containers/Loader/Loader'));
import store from "./Store";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/reviews",
          element: (
            <Suspense fallback={<Loader />}>
              <Reviews />
            </Suspense>
          ),
        },
        {
          path: "/cart",
          element: (
            <Suspense fallback={<Loader />}>
              <Cart />
            </Suspense>
          ),
        },
        {
          path: "/restro/:id",
          element: (
            <Suspense fallback={<Loader />}>
              <DynamicRestros />
            </Suspense>
          )
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