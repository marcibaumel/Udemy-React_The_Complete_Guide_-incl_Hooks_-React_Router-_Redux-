import {useParams, Route} from "react-router-dom";
import Comments from "../comments/Comments";

export const QuoteDetail = () => {
    const params = useParams();

    return (
        <>
            <h1>Quote Detail page</h1>
            <p>{params.quoteId}</p>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments/>
            </Route>
        </>
    )
}