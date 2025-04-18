import React, { useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';

import styles from './Home.module.css';
import { addRestaurants } from '../../Slices/Products';
import CarouselComp from '../../Components/Carousel/Carousel';
import Loader from '../Loader/Loader';
const Restro = React.lazy(() => import("../../Components/Restro/Restro"));

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchApi = async() => {
            try {
                const res = await fetch('https://food-api-0suk.onrender.com/restaurants');
                const data = await res.json();
                dispatch(addRestaurants(data));
            }
            catch (err) {
                console.log('ERROR WHILE FETCHING DATA FROM API', err);
            }
        };
        fetchApi();
    }, [])

    return (
        <section className={styles.container}>
            <CarouselComp />
            <Suspense fallback={<Loader />}>
                <Restro />
            </Suspense>
        </section>
    );
};

export default Home;