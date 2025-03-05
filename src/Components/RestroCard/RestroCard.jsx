import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addLocation } from "../../Slices/User";
import { addDoc, collection } from "firebase/firestore";

import styles from "./RestroCard.module.css";
import { firestore } from "../../Configuration/Firestore";

const RestroCard = ({
  avgRating,
  costForTwo,
  cuisines,
  deliveryTime,
  id,
  location,
  name,
  ratingCount,
  resImageID,
  description,
  price,
  imageId,
  isVeg,
  rating,
}) => {
  const IMG_CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currLocation = useLocation();

  const cartItemsRef = collection(firestore, "cartItmes");

  const addBtn = () => {
    setQuantity(quantity + 1);
  };

  const minusBtn = () => {
    setQuantity(quantity - 1);
  };

  const openRestro = () => {
    navigate(`/restro/${id}`);
  };

  const addToCart = async() => {
    const user = JSON.parse(localStorage.getItem("userDetails"));

    if (!user) {
      alert("Login to add product on cart");
      dispatch(addLocation(currLocation.pathname));
      navigate("/login");
    }
    else {
      const data = {
        restroId: id,
        name: name,
        price: price,
        quantity: quantity,
        imageId: imageId,
        description: description,
        isVeg: isVeg,
        rating: rating,
        ratingCount: ratingCount,
        userName: user.userName
      };
      try {
        await addDoc(cartItemsRef, data);
        alert('Item Added to cart');
      }
      catch (err) {
        console.log('ERROR WHILE ADDING ITEM IN CART');
      }
    }
  };

  return (
    <div
      onClick={id <= 100 ? openRestro : null}
      className={styles["card-container"]}
    >
      <div className={styles.img}>
        <img
          src={`${IMG_CDN_URL}${resImageID ? resImageID : imageId}`}
          alt={`${name}`}
        />
      </div>
      <div className={styles.info}>
        <h1>{`${name} ${location ? ` - ${location}` : ""}`}</h1>
        <p>
          <span>{cuisines ? cuisines.join(", ").toUpperCase() : ""}</span>
          <span>{costForTwo ? costForTwo : description}</span>
        </p>
        <span>
          {avgRating ? avgRating : rating}⭐ from — {ratingCount}
        </span>
        <span>
          {deliveryTime ? `Delivery in ${deliveryTime} minutes` : `₹${price}`}{" "}
          &nbsp;
          {id > 100 ? (isVeg ? "Veg" : "Non-Veg") : ""}
        </span>
        {id > 100 ? (
          <div className={styles.amount}>
            <button onClick={minusBtn} disabled={quantity == 1 ? true : false}>
              <FaMinus />
            </button>
            <span>{quantity}</span>
            <button onClick={addBtn}>
              <FaPlus />
            </button>
          </div>
        ) : (
          ""
        )}
        {id > 100 ? (
          <button onClick={addToCart} className={styles.addToCart}>
            Add to Cart
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default RestroCard;