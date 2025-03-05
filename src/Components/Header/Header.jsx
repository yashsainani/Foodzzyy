import { Link, useLocation, useNavigate } from 'react-router-dom';

import styles from './Header.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEmail, addLocation, addPhotoUrl, addUser } from '../../Slices/User';

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [toggleMenu, setToggleMenu] = useState(false);
    const userName = useSelector(state => state.user.userName);
    const photoUrl = useSelector(state => state.user.userPhoto);
    const currLocation = useLocation()

    const toggleFunction = () => {
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true);    
    }

    const logOutFN = () => {
        localStorage.clear();
        dispatch(addUser(""));
        dispatch(addEmail(""));
        dispatch(addPhotoUrl(""));
    };

    const logInFn = () => {
        navigate('/login')
        dispatch(addLocation(currLocation));
    }

    return (
        <header className={styles.header}>
            <div className={styles['mobile-nav']}>
                <svg className={styles.menuIcon} width={'50px'} height={'40px'} viewBox={'0 0 50 40'} onClick={toggleFunction}>
                    <line style={{ rotate : toggleMenu ? '45deg' : '0deg' }} className={`${styles.bar} ${styles.bar1}`} x1="5" y1="8" x2="35" y2="8"></line>
                    <line style={{ opacity : toggleMenu ? '0' : '1' }} className={`${styles.bar} ${styles.bar2}`} x1="5" y1="20" x2="35" y2="20"></line>
                    <line style={{ rotate : toggleMenu ? '-45deg' : '0deg' }} className={`${styles.bar} ${styles.bar3}`} x1="5" y1="32" x2="35" y2="32"></line>
                </svg>
                <div style={{ top : toggleMenu ? '100%' : '-200%', opacity : toggleMenu ? '1' : '0' }} className={styles['mobile-menu']}>
                    <Link to={'/'} className={styles.link}>HOME</Link>
                    <Link to={'/reviews'} className={styles.link}>REVIEWS</Link>
                    <Link to={'/cart'} className={styles.link}>CART</Link>
                </div>
            </div>
            <h1>FOODZZYY</h1>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link to={'/'} className={styles.link}>HOME</Link>
                    </li>
                    <li>
                        <Link to={'/reviews'} className={styles.link}>REVIEWS</Link>
                    </li>
                    <li>
                        <Link to={'/cart'} className={styles.link}>CART</Link>
                    </li>
                </ul>
            </nav>
            <div className={styles['login-credential']}>
                <p>{userName ? userName : 'Guest User'}</p>
                {
                    photoUrl ?
                    <button className={styles.logOut} title='LOG-OUT' onClick={logOutFN}>
                        <img src={`${photoUrl}`} alt="user-photo" onClick={logOutFN} />
                    </button> :
                    <button className={styles.logIn} title='LOG-IN' onClick={logInFn}>
                        <Link to={'/login'} className={styles.btnLink}>Login</Link>
                    </button>

                }
            </div>
        </header>
    );
};

export default Header;