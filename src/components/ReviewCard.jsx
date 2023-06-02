import { Link } from 'react-router-dom';

export const ReviewCard = ({review_id, title, designer, owner, review_img_url, category, created_at, votes, comment_count}) => {

    return (
        <div className='review-card'>
            <Link to={`/reviews/${review_id}`}>
                <article>
                    <h2>{title}</h2>
                    <h3>By {owner} in {category}</h3>
                    <img src={review_img_url} />
                    <h4>Votes: {votes}</h4>
                    <h4>Comments: {comment_count}</h4>
                </article>
            </Link>
        </div>
    );
};