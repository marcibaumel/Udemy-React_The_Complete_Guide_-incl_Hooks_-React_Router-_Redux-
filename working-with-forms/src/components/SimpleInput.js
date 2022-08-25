import {useState, useEffect} from "react";
import {useInput} from "../hooks/use-input";

const SimpleInput = (props) => {

    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBluerHandler: nameBlurHandler,
        reset, resetNameInput
    } = useInput(value => value.trim() != '');


    const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'

    let formIsValid = false;

    if (enteredNameIsValid) {
        formIsValid = true;
    }


    const formSubmissionHandler = event => {
        event.preventDefault()

        if (!enteredNameIsValid) {
            return;
        }

        console.log(enteredName)
        resetNameInput();
    }

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    value={enteredName}
                />
                {nameInputHasError && <p className="error-text">Not must not be empty</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
