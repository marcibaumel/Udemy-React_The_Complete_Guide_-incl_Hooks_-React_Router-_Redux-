import {Link} from "react-router-dom";

export const Products = () => {
    return(
    <section>
        <h1>The products Page</h1>
        <ul>
            <li><Link to='products/1'>Book</Link></li>
            <li><Link to='products/2'>Carpet</Link></li>
            <li><Link to='products/3'>Film</Link></li>
        </ul>
    </section>
    )
}