import QuoteList from "../quotes/QuoteList";

const DUMMY_QUOTES = [
    {id: 'q1', author: 'me', text: 'React is fun'},
    {id: 'q2', author: 'me again', text: 'React is fun2'},
    {id: 'q3', author: 'me', text: 'React is fun3'},
    {id: 'q4', author: 'me again', text: 'React is fun4'},
]


export const AllQuotes = () => {
    return (
    <QuoteList quotes={DUMMY_QUOTES}></QuoteList>
    )
}