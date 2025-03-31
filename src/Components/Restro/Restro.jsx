import React, { Suspense, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import styles from "./Restro.module.css";
import Loader from "../../Containers/Loader/Loader";
const RestroCard = React.lazy(() => import("../RestroCard/RestroCard"));

const Restro = () => {
  const restroArr = useSelector((state) => state.products.restaurants);
  const formRef = useRef();
  const [restros, setRestros] = useState(restroArr);

  useEffect(() => {
    setRestros(restroArr);
  }, [restroArr]);

  const searchRestro = () => {
    const searchKey = formRef.current.input.value.toLowerCase();

    const filteredRestros = restroArr.filter((ele) => {
      return (
        ele.name.toLowerCase().includes(searchKey) ||
        ele.location.toLowerCase().includes(searchKey) ||
        ele.cuisines.join(" ").toLowerCase().includes(searchKey)
      );
    });

    setRestros(filteredRestros);
  };

  const filterByRating = () => {
    const selected = formRef.current.select.value;
    console.log(selected);

    setRestros((prev) => {
      const sorted = [...prev].sort((a, b) =>
        selected === "lth"
          ? a.avgRating - b.avgRating
          : b.avgRating - a.avgRating
      );
      return sorted;
    });
  };

  return (
    <section className={styles.restro}>
      <form ref={formRef} className={styles.form}>
        <input
          name="input"
          onChange={searchRestro}
          type="text"
          placeholder="Search Here ..."
        />
        <select
          onChange={filterByRating}
          name="select"
          id="Restro"
          defaultValue={"select"}
        >
          <option value="select" disabled>
            RATINGS
          </option>
          <option value="lth">LOW TO HIGH</option>
          <option value="htl">HIGH TO LOW</option>
        </select>
      </form>
      <hr />
      <section className={styles["restro-section"]}>
        {restros.map((ele) => (
          <Suspense fallback={<Loader />}>
            <RestroCard key={ele.id} {...ele} className={styles.restroCard} />
          </Suspense>
        ))}
      </section>
    </section>
  );
};

export default Restro;