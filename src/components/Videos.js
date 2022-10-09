import React from 'react';
import '../styles/productReview.css'
import VideoCard from './VideoCard';

const Videos = ({Videos}) => {
    return (
        <>
            <div className="videoBx">
                {
                    Videos.map((e,i) =>{
                        return(
                            <>
                                <VideoCard key={i} image={e.image} name={e.name} link={e.url} index={i}/>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Videos
