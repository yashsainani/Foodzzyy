import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEmail, addPhotoUrl, addUser } from '../../Slices/User';

import styles from './Layout.module.css';
import Header from '../../Components/Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {

    const dispatch = useDispatch();

    let userDetails = localStorage.getItem('userDetails');
    if(userDetails !== null) {
        userDetails = JSON.parse(userDetails);
        dispatch(addUser(userDetails.userName));
        dispatch(addEmail(userDetails.userEmail));
        dispatch(addPhotoUrl(userDetails.userPhoto));
    }

    return (
        <section className={styles.container}>
            <Header />
            <Outlet />
            <Footer />
        </section>
    );
};

export default Layout;