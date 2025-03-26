import { collection, getDocs, query, where } from "firebase/firestore";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Cart.module.css";
import { firestore } from "../../Configuration/Firestore";
import { addCart } from "../../Slices/Products";
import Loader from "../Loader/Loader";
const CartCard = React.lazy(() => import("../../Components/CartCard/CartCard"));

const Cart = () => {

  const dispatch = useDispatch();
  const userName = useSelector(state => state.user.userName);
  const cart = useSelector(state => state.products.cart);

  const cartItemsRef = collection(firestore, "cartItmes");

  // const [cartProducts, setCartProducts] = useState([]);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const cartItems = await getDocs(query(cartItemsRef, where('userName', '==', userName)));
        const data = cartItems.docs.map((ele) => ({ ...ele.data(), id: ele.id }));
        dispatch(addCart(data));
        const currAmount = data.reduce((prev, curr) => prev + (curr.price * curr.quantity), 0);
        setAmount(currAmount);
      } catch (err) {
        console.log("ERROR WHILE FETCHING DATA FROM FIREBASE");
      }
    };
    getCartItems();
  }, []);

  return (
    <section className={styles.cart}>
      {cart.length > 0 ? (
        cart.map((ele) => (
          <Suspense fallback={ <Loader /> }>
            <CartCard key={ele.id} {...ele} />
          </Suspense>
        ))
      ) : (
        <h1 className={styles.empty}>CART IS EMPTY</h1>
      )}
      {cart.length > 0 ? (
        <p>
          <span>TOTAL</span>
          <span>:</span>
          <span>{`${amount}₹`}</span>
        </p>
      ) : (
        ""
      )}
    </section>
  );
};

export default Cart;