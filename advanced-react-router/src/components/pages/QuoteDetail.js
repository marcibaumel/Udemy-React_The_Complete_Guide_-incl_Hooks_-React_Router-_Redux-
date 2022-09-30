import {useParams, Route} from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";

const DUMMY_QUOTES = [
    {id: 'q1', author: 'me', text: 'React is fun'},
    {id: 'q2', author: 'me again', text: 'React is fun2'},
    {id: 'q3', author: 'me', text: 'React is fun3'},
    {id: 'q4', author: 'me again', text: 'React is fun4'},
]

export const QuoteDetail = () => {
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
    if(!quote){
        return <p>No quote found!</p>
    }

    return (
        <>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments/>
            </Route>
        </>
    )
}