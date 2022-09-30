import QuoteForm from "../quotes/QuoteForm";

const addQuoteHandler = () => {

}

export const NewQuote = () => {
    return (
        <QuoteForm onAddQuote={addQuoteHandler}/>
    )
}