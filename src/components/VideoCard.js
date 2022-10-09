import React from 'react'
import '../styles/videoCardBx.css'

const VideoCard = ({image,name,link,index}) => {
    return (
        <>
                <div className="videoCardBx">
                    <img src={image} alt={index} />
                    <div className="upperLayer">
                    <a href={link} target="_blank">
                        <div className="playBx">
                            <ion-icon name="play"></ion-icon>
                        </div>
                            <h3 className='proName'>{name}</h3>
                     </a>
                    </div>
                </div>
        </>
    )
}

export default VideoCard
