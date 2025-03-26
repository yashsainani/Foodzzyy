import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./DynamicRestros.module.css";
import Loader from "../../Containers/Loader/Loader";
const RestroCard = React.lazy(() => import("../RestroCard/RestroCard"));

const DynamicRestros = () => {
  const { id } = useParams();
  const [restros, setRestros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://food-api-0suk.onrender.com/restaurants/${id}/menu`
      );
      const data = await res.json();
      setRestros(data);
    };
    fetchData();
  }, []);

  return (
    <section className={styles.restro}>
      {restros.map((ele) => (
        <Suspense fallback={<Loader />}>
          <RestroCard key={ele.id} {...ele} />
        </Suspense>
      ))}
    </section>
  );
};

export default DynamicRestros;