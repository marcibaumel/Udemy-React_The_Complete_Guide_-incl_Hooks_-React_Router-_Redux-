import {useState, useEffect} from "react";

const SimpleInput = (props) => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouch, setEnteredNameTouch] = useState(false);


    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouch;
    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

    let formIsValid = false;

    if (enteredNameIsValid) {
        formIsValid = true;
    }

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    }

    const formSubmissionHandler = event => {
        event.preventDefault()

        setEnteredNameTouch(true);

        if (!enteredNameIsValid) {
            return;
        }

        console.log(enteredName)
        setEnteredName('');
        setEnteredNameTouch(false);
    }

    const nameInputBluerHandler = event => {
        setEnteredNameTouch(true);
    }

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBluerHandler}
                    value={enteredName}
                />
                {nameInputIsInvalid && <p className="error-text">Not must not be empty</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
