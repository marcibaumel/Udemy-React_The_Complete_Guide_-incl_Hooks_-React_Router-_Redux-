import {useParams} from 'react-router-dom'

export const ProductDetail = () => {

    const params = useParams();

    console.log(params.productId)

    return (
        <>
            <h1>Product detail</h1>
            <p>{params.productId}</p>
        </>
    )
}