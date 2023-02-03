import { useRouter } from "next/router"

function productReview(){

    const router = useRouter()

    const {productId,reviewId}= router.query
    return <h1>PRODUCT {reviewId} of product {productId}</h1>
}

export default productReview