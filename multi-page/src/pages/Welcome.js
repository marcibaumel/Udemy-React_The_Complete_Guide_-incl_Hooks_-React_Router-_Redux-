import {Route} from "react-router-dom";

export const Welcome = () => {
    return (
        <>
            <h1>The welcome page</h1>
            <Route path='/welcome/new-user'>
                <p>Welcome new user</p>
            </Route>
        </>
    )
}