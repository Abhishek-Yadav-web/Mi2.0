import React from 'react'
import Offer from './Offer'
import '../styles/offers.css'

const Offers = ({offer}) => {
    return (
        <>
            <div className="offerSection">
                {
                    offer.map((e,i) => {
                        return(
                            <div className="offerSection__imgBx">
                                <Offer key={e.image} index={i} src={e.image} link={e.url}/>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Offers
