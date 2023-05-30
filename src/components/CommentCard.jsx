export const CommentCard = ({ comment_id, body, votes, author, created_at }) => {
    return (
        <>
            <h3>By {author}</h3>
            <p>{body}</p>
            <h4>Votes: {votes}</h4>
            <h4>Posted on: {created_at}</h4>
        </>
    );
};