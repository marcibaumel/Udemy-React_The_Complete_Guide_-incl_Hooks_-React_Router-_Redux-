import {useEffect, useRef, useState} from "react";

const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameTouch, setEnteredNameTouch] = useState(false);

    useEffect(() => {
        if (enteredNameIsValid) {
            console.log('Name input is valid')
        }
    }, [enteredNameIsValid]);


    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    }

    const formSubmissionHandler = event => {
        event.preventDefault()

        setEnteredNameTouch(true);

        if (enteredName.trim() == '') {
            setEnteredNameIsValid(false)
            return;
        }
        setEnteredNameIsValid(true);
        console.log(enteredName)
        setEnteredName('');
    }

    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouch;

    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input ref={nameInputRef}
                       type='text'
                       id='name'
                       onChange={nameInputChangeHandler}
                       value={enteredName}
                />
                {nameInputIsInvalid && <p className="error-text">Not must not be empty</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
