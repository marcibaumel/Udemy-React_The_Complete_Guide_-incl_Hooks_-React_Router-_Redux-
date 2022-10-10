import QuoteList from "../quotes/QuoteList";
import useHttp from "../../hooks/use-http";
import {getAllQuotes} from "../../lib/api";
import {useEffect} from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import NoQuotesFound from "../quotes/NoQuotesFound";

const DUMMY_QUOTES = [
    {id: 'q1', author: 'me', text: 'React is fun'},
    {id: 'q2', author: 'me again', text: 'React is fun2'},
    {id: 'q3', author: 'me', text: 'React is fun3'},
    {id: 'q4', author: 'me again', text: 'React is fun4'},
]


export const AllQuotes = () => {

    const {sendRequest, status, data: loadedQuotes, error} =useHttp(getAllQuotes, true);

    useEffect(() => {
       sendRequest()
    }, [sendRequest]);

    if(status === 'pending'){
        return <div className='centered'><LoadingSpinner/></div>
    }

    if(error){
        return <p className='centered focused'>{error}</p>
    }

    if(status === 'completed' && !loadedQuotes || loadedQuotes.length === 0){
        return  <NoQuotesFound/>
    }

    return (
    <QuoteList quotes={loadedQuotes}></QuoteList>
    )
}