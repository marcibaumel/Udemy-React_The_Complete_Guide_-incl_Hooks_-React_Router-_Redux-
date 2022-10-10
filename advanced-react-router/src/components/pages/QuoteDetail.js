import {useParams, Route, Link, useRouteMatch} from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import {getSingleQuote} from "../../lib/api";
import useHttp from "../../hooks/use-http";
import {useEffect} from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import NoQuotesFound from "../quotes/NoQuotesFound";


const DUMMY_QUOTES = [
    {id: 'q1', author: 'me', text: 'React is fun'},
    {id: 'q2', author: 'me again', text: 'React is fun2'},
    {id: 'q3', author: 'me', text: 'React is fun3'},
    {id: 'q4', author: 'me again', text: 'React is fun4'},
]

export const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();

    const {quoteId} = params
    const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true);

    console.log(match);

    useEffect(() => {
        sendRequest(quoteId)
    }, [sendRequest])

    if (status === 'pending') {
        return <div className='centered'><LoadingSpinner/></div>
    }

    if (error) {
        return <p className='centered focused'>{error}</p>
    }

    if (!loadedQuote.text) {
        return <p>No quote found!</p>
    }

    return (
        <>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}/>
            <Route path={match.path} exact>
                <div className="centered">
                    <Link className='btn--flat' to={`${match.path}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments/>
            </Route>
        </>
    )
}