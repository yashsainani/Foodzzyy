import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
    return(
        <section className={styles.footer}>
            <div className={styles['company-details']}>
                <div className={styles.company}>
                    <h1 className={styles.title}>COMPANY</h1>
                    <ul>
                        <li>ABOUT US</li>
                        <li>TEAM</li>
                        <li>SPONSORS</li>
                        <li>COLLABORATORS</li>
                    </ul>
                </div>
                <div className={styles.legality}>
                    <h1 className={styles.title}>LEGAL</h1>
                    <ul>
                        <li>TERMS & CONDITIONS</li>
                        <li>RETURNS & CANCELLATIONS</li>
                        <li>PRIVACY POLICY</li>
                        <li>COOKIES POLICY</li>
                    </ul>
                </div>
                <div className={styles.extra}>
                    <div className={styles.social}>
                        <h1 className={styles.title}>FOLLOW US ON</h1>
                        <ul className={styles.platforms}>
                            <li>
                                <FaInstagram />
                            </li>
                            <li>
                                <FaFacebook />
                            </li>
                            <li>
                                <FaTwitter />
                            </li>
                            <li>
                                <FaYoutube />
                            </li>
                        </ul>
                    </div>
                    <div className={styles.form}>
                        <p>ENTER EMAIL TO GET INFORM ABOUT EXCLUSIVE OFFERS</p>
                        <form>
                            <input type="email" placeholder='Enter Your Email' />
                            <button>SEND</button>
                        </form>
                    </div>
                </div>
            </div>
            <hr />
            <p>All &copy; copyright to FOODZZYY</p>
        </section>
    )
};

export default Footer;