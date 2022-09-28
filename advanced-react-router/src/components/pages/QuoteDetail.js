import {useParams} from "react-router-dom";

export const QuoteDetail = () => {
    const params = useParams();

    return (
        <>
            <h1>Quote Detail page</h1>
            <p>{params.quoteId}</p>
        </>
    )
}