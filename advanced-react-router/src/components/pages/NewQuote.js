import {useHistory} from "react-router-dom";
import {useEffect} from "react";
import QuoteForm from "../quotes/QuoteForm";
import useHttp from "../../hooks/use-http";
import {addQuote} from "../../lib/api";

export const NewQuote = () => {

    const {sendRequest, status} = useHttp(addQuote);
    const history = useHistory();

    useEffect(() => {
        if(status === 'completed'){
            history.push('/quotes')
        }
    },[status])

    const addQuoteHandler = (quoteData) => {
        sendRequest(quoteData)
        console.log(quoteData)

        history.push('/quotes')
    }

    return (
        <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}/>
    )
}