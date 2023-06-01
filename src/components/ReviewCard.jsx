import { Link } from 'react-router-dom';
import { Vote } from './Vote';
import { useState } from 'react';

export const ReviewCard = ({review_id, title, designer, owner, review_img_url, category, created_at, votes, comment_count}) => {

    const [incVotes, setIncVotes] = useState(0);
    let props = {review_id:review_id, incVotes:incVotes, setIncVotes:setIncVotes}

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
            <Vote {...props} />
        </div>
    );
};