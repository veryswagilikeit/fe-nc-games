import { useEffect, useState } from "react"
import { getReviewById } from "../api";
import { useParams } from "react-router-dom"
import { Comments } from "./Comments";
import { Vote } from "./Vote";

export const SingleReview = () => {
    const [singleReview, setSingleReview] = useState({});
    const {review_id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [incVotes, setIncVotes] = useState(0);
    let props = {review_id:singleReview.review_id, incVotes:incVotes, setIncVotes:setIncVotes}

    useEffect(() => {
        getReviewById(review_id)
            .then((reviewData) => {
                setSingleReview(reviewData);
                setIsLoading(false);
            });
    }, [review_id])

    if (isLoading) {
        return <p>Loading...</p>
    };

    return (
        <>
            <h2>{singleReview.title}</h2>
            <h3>By {singleReview.owner} in {singleReview.category}</h3>
            <img src={singleReview.review_img_url} />
            <p>{singleReview.review_body}</p>
            <h4>Votes: {singleReview.votes}</h4>
            <h4>Comments: {singleReview.comment_count}</h4>
            <h4>Game designed by: {singleReview.designer}</h4>
            <h4>Review posted on: {singleReview.created_at}</h4>
            <Comments review_id={review_id} />
            <Vote {...props} />
        </>
    )
}