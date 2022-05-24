import React from 'react'
import { Card } from '../UI/Card'
import classes from './UsersList.module.css'

export const UserList = (props) => {
    return (
        <Card className={classes.user}>
            <ul>
                {props.users.map(user => <li>{user.name} ({user.age} years old)</li>)}
            </ul>
        </Card>
    )
}
