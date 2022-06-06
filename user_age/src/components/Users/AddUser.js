import React, { useState, useRef } from 'react'
import { Card } from '../UI/Card';
import classes from './AddUser.module.css'
import { Button } from '../UI/Button';
import { ErrorModal } from '../UI/ErrorModal';
import { Wrapper } from '../Helpers/Wrapper';

export const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const usernameChangeHandler = (event => {
        setEnteredUsername(event.target.value);
    })

    const ageChangeHandler = (event => {
        setEnteredAge(event.target.value);
    })

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        console.log(enteredName)
        const enteredUserAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            })
            return;
        }

        if (enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (>0)'
            })
            return
        };

        //console.log(enteredUsername, enteredAge);
        props.onAddUser(enteredName, enteredUserAge);
        setEnteredAge('');
        setEnteredUsername('');
        //nameInputRef.current.value = '';
        //ageInputRef.current.value = '';
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input ref={nameInputRef} id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
                    <label htmlFor='age'>Age (Years)</label>
                    <input ref={ageInputRef} id="age" type="number" onChange={ageChangeHandler} value={enteredAge} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>

    )
}
