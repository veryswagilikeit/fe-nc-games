import { useEffect, useState } from 'react';
import { getReviews } from '../api';
import { ReviewCard } from './ReviewCard';

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getReviews()
            .then((reviews) => {
                setReviews(reviews);
                setIsLoading(false);
            })
    }, []);

    if (isLoading) {
        return <p>Loading...</p>
    };

    return (
        <>
            <ul>
                {reviews.map((review) => {
                    return <ReviewCard key={review.review_id} {...review} />
                })}
            </ul>
        </>
    );
};