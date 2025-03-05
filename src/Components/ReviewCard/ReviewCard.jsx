import styles from './ReviewCard.module.css';

const ReviewCard = ({review, userName, id}) => {
    return (
        <div className={styles['review-card']}>
            <p>{ review }</p>
            <h3>{ userName }</h3>
        </div>
    );
};

export default ReviewCard;