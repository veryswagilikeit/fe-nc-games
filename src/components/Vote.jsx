import { useState } from "react";
import { patchVote } from "../api";

export const Vote = ({review_id, votes}) => {
    const [err, setErr] = useState(null);
    const [voteCount, setVoteCount] = useState(votes);

    const incrementVote = (vote) => {
        if (vote === 1) {
            patchVote(review_id, vote)
                .catch((err) => {
                    setErr("Error, please try again.");
                });
        };

        if (vote === -1) {
            patchVote(review_id, vote)
                .catch((err) => {
                    setErr("Error, please try again.");
                });
        };
    }

    const handleClick = (event) => {
        if (event.target.innerText === "👍") {
            setVoteCount(voteCount + 1);
            incrementVote(1);
        }

        if (event.target.innerText === "👎") {
            setVoteCount(voteCount + -1);
            incrementVote(-1);
        }
    };

    if (err) return <p>{err}</p>;

    return (
        <>
            <h4>Votes: {voteCount}</h4>
            <button onClick={handleClick}>👍</button>
            <button onClick={handleClick}>👎</button>
        </>
    );
};