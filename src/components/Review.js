import React from 'react'
import '../styles/review.css'

const Review = ({link,image,review,proName,proPrice,index}) => {
    return (
        <>
            <a href={link}>
                <div className="reviewBx">
                    <div className="reviewBx__imgBx">
                        <img src={image} alt={index} />
                    </div>
                    <div className="reviewBx__info">
                        <span className='review'>{review}</span>
                        <a href={link}>
                           <span className='proName'>{proName}</span>
                        </a>
                        <span className='proPrice'>{proPrice}</span>
                    </div>
                </div>
            </a>
        </>
    )
}

export default Review
