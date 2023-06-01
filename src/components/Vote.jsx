import { useState } from "react";
import { patchVote } from "../api";

export const Vote = ({review_id, incVotes, setIncVotes}) => {
    const [err, setErr] = useState(null);

    const incrementVote = (vote) => {
        if ((vote === 1 && incVotes !== 1) || (vote === -1 && incVotes !== -1)) {
            setIncVotes(vote)
            patchVote(review_id, vote)
                .catch((err) => {
                    setIncVotes(0);
                    setErr('Error, please try again.');
                });
        };

        if ((vote === 1 && incVotes === 1) || (vote === -1 && incVotes === -1)) {
            setIncVotes(0);
            patchVote(review_id, -vote)
                .catch((err) => {
                    setIncVotes(0);
                    setErr('Error, please try again');
                });
        };
    };

    if (err) return <p>{err}</p>;

    return (
        <>
            <button onClick={() => {
                incrementVote(1)}}>👍</button>

            <button onClick={() => {incrementVote(-1)}}>👎</button>
        </>
    );
};