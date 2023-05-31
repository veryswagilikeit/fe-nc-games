import { useEffect, useState } from "react"
import { getCommentsByReviewId } from "../api";
import { CommentCard } from "./CommentCard";

export const Comments = ({review_id}) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsByReviewId(review_id)
            .then((commentsData) => {
                setComments(commentsData);
            })
    }, [review_id]);

    return (
        <>
            <h2>Comments: </h2>
            <ul>
                {comments.map((comment) => {
                    return <CommentCard key={comment.comment_id} {...comment} />
                })}
            </ul>
        </>
    );
};