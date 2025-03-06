import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { Bounce, toast, ToastContainer } from "react-toastify";

import styles from "./CartCard.module.css";
import { firestore } from "../../Configuration/Firestore";
import { useDispatch } from "react-redux";
import { addCart } from "../../Slices/Products";

const CartCard = ({
  description,
  imageId,
  isVeg,
  name,
  price,
  quantity,
  rating,
  ratingCount,
  restroId,
  userName,
  id,
}) => {
  const cartItemsRef = collection(firestore, "cartItmes");

  const dispatch = useDispatch();

  const IMG_CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

  const deleteFn = async () => {
    try {
      const docRef = doc(firestore, "cartItmes", id);
      await deleteDoc(docRef);
      const alert = () =>
        toast.info("Cart Item Deleted Successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          newestOnTop: true,
          closeOnClick: true,
          theme: "light",
          transition: Bounce,
          pauseOnHover: false
        });
      alert();
      const res = await getDocs(
        query(cartItemsRef, where("userName", "==", userName))
      );
      const data = res.docs.map((ele) => ({ ...ele.data(), id: ele.id }));
      dispatch(addCart(data));
    } catch (err) {
      console.log("ERROR WHILE DELETING A DOCUMENT IN FIREBASE —> ", err);
    }
  };

  return (
    <section className={styles.cartCard}>
      <img src={`${IMG_CDN_URL}${imageId}`} alt="" />
      <div className={styles.products}>
        <h1>{`Ordered Item —> ${name} - ${isVeg ? "Veg" : "NonVeg"}`}</h1>
        <p>{description}</p>
        <div className={styles.amount}>
          <p>{`Quantity: ${quantity}`}</p>
          <p>{`Amount: ${price}₹`}</p>
          <p>=</p>
          <p>{`Total: ${quantity * price}₹`}</p>
        </div>
        <span>{`${rating}⭐ from ${ratingCount}`}</span>
        <button onClick={deleteFn} className={styles.delBtn}>
          DELETE
        </button>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick={true}
          theme="light"
          transition={Bounce}
          pauseOnHover
        />
      </div>
    </section>
  );
};

export default CartCard;