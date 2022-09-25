import {Link} from "react-router-dom";


export const MainHeader = () => {
    return(
        <header>
            <ul>
                <li>
                    <Link to="/welcome">Welcome</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>
        </header>
    )
}