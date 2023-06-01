import { useEffect, useState } from "react";
import { patchVote } from "../api";

export const Vote = ({review_id, votes}) => {
    const [err, setErr] = useState(null);
    const [voteCount, setVoteCount] = useState(votes);
    const [incVotes, setIncVotes] = useState(0);

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

    const handleClickUp = (voteCount) => {
        setVoteCount(votes + 1);
        incrementVote(1);
    };

    const handleClickDown = (voteCount) => {
        setVoteCount(votes - 1);
        incrementVote(-1);
    };

    if (err) return <p>{err}</p>;

    return (
        <>
            <h4>Votes: {voteCount}</h4>
            <button onClick={handleClickUp}>👍</button>
            <button onClick={handleClickDown}>👎</button>
        </>
    );
};