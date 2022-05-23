import React, { useState } from 'react'
import { Card } from '../UI/Card';
import classes from './AddUser.module.css'
import { Button } from '../UI/Button';

export const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const usernameChangeHandler = (event => {
        setEnteredUsername(event.target.value);
    })

    const ageChangeHandler = (event => {
        setEnteredAge(event.target.value);
    })

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }

        if (enteredAge < 1) { return };

        console.log(enteredUsername, enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
                <label htmlFor='age'>Age (Years)</label>
                <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>

    )
}