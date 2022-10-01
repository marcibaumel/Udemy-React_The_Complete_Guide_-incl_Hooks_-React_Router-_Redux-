import {useParams, Route, Link, useRouteMatch} from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";

const DUMMY_QUOTES = [
    {id: 'q1', author: 'me', text: 'React is fun'},
    {id: 'q2', author: 'me again', text: 'React is fun2'},
    {id: 'q3', author: 'me', text: 'React is fun3'},
    {id: 'q4', author: 'me again', text: 'React is fun4'},
]

export const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();

    console.log(match);

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
    if(!quote){
        return <p>No quote found!</p>
    }

    return (
        <>
            <HighlightedQuote text={quote.text} author={quote.author}/>
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