import styles from './Loader.module.css';

const Loader = () => {

    return (
      <section className={styles['load-section']}>
        <span className={styles.loader}></span>
      </section>
    );
};

export default Loader;