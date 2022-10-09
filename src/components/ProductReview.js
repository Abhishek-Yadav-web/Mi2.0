import React from 'react'
import '../styles/productReview.css'
import Review from './Review'

const ProductReview = ({reviews}) => {
    return (
        <>
            <div className="productReview">
                {
                    reviews.map((e,i) => {
                        return(
                            <>
                                <Review key={i} link={e.url} image={e.image} review={e.review} proName={e.name} proPrice={e.price} index={i}/>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

{/* */}

export default ProductReview
