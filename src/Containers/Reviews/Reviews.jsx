import { useEffect, useRef } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestore } from "../../Configuration/Firestore";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./Reviews.module.css";
import { addReviews } from "../../Slices/Products";
import { addLocation } from "../../Slices/User";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";

const Reviews = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.products.reviews);
  const userName = useSelector((state) => state.user.userName);
  const reviewCollectionRef = collection(firestore, "reviews");
  const currLocation = useLocation();
  const navigate = useNavigate();

  const inputRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDocs(reviewCollectionRef);
        const data = res.docs.map((ele) => ({ ...ele.data(), id: ele.id }));
        dispatch(addReviews(data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const postFn = async () => {
    const user = JSON.parse(localStorage.getItem("userDetails"));

    if (!user) {
      alert("Login to add product on cart");
      dispatch(addLocation(currLocation.pathname));
      navigate("/login");
      return;
    }

    const reviewInfo = {
      review: inputRef.current.value,
      userName: userName,
    };
    try {
      await addDoc(reviewCollectionRef, reviewInfo);
      const res = await getDocs(reviewCollectionRef);
      const data = res.docs.map((ele) => ({ ...ele.data(), id: ele.id }));
      dispatch(addReviews(data));
      inputRef.current.value = '';
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className={styles["reviews-section"]}>
      <form className={styles.form}>
        <input ref={inputRef} type="text" placeholder="What's your review..." />
        <button type="button" onClick={postFn}>
          POST
        </button>
      </form>
      <div className={styles.reviews}>
        {reviews.map((ele) => (
          <ReviewCard key={ele.id} {...ele} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
