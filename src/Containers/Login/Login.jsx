import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

import styles from "./Login.module.css";
import { auth, firestore, googleAuthProvider } from "../../Configuration/Firestore";
import { addEmail, addPhotoUrl, addUser } from "../../Slices/User";

const Login = () => {
  const location = useSelector((state) => state.user.prevLocation);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userCollectionRef = collection(firestore, 'users');

  const [signWay, setSignWay] = useState(true);

  const loginFn = async () => {
    try {
      const userDetails = await signInWithPopup(auth, googleAuthProvider);
      const userInfo = {
        userName: userDetails.user.displayName,
        userEmail: userDetails.user.email,
        userPhoto: userDetails.user.photoURL,
      };
      const user = await getDocs(query(userCollectionRef, where('userName', '==', userInfo.userName)));

      if (signWay) {
        if (user.docs.length === 0) {
          alert("SIGN UP FIRST YOU DO NOT HAVE ANY ACCOUNT");
          return;
        }
      }
      else {
        if (user.docs.length > 0) {
          alert('ACCOUNT HAS ALREADY BEEN CREATED TRY TO LOGIN');
          return
        }
        else await addDoc(userCollectionRef, userInfo);
      }
      dispatch(addUser(userDetails.user.displayName));
      dispatch(addEmail(userDetails.user.email));
      dispatch(addPhotoUrl(userDetails.user.photoURL));
      localStorage.setItem("userDetails", JSON.stringify(userInfo));
      navigate(location);
    }
    catch (err) {
      console.log(err);
    }
  };

  return (
    <section className={styles.login}>
      <h1>Welcome To Foodzzyy</h1>
      <div className={styles["sign-way"]}>
        <p
          onClick={() => setSignWay(true)}
          style={{
            backgroundColor: signWay ? "#abac7f" : "",
            color: signWay ? "white" : "#373d20",
          }}
        >
          Login
        </p>
        <p
          onClick={() => setSignWay(false)}
          style={{
            backgroundColor: signWay ? "" : "#abac7f",
            color: signWay ? "#373d20" : "white",
          }}
        >
          Sign Up
        </p>
      </div>
      <p>{signWay ? "Sign In to account" : "Create Account to get start"}</p>
      <button onClick={loginFn}>
        {signWay ? "Login With Google" : "Sign Up With Google"}
      </button>
      <p>
        By Logging In or Signing Up, you are agreeing with our{" "}
        <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>
      </p>
    </section>
  );
};

export default Login;