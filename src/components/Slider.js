import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/slider.css'

const Slider = ({start}) => {
    const [active,setActive] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setActive(selectedIndex);
      };

      useEffect(() => {
        if(active > 7){
            setActive(0);
        }
      }, [active])
      

    return (
        <>
            <Carousel fade activeIndex={active} onSelect={handleSelect} style={{height:"80vh"}} indicators="false">
                {start.map((e,i) => {
                    return(
                        <Carousel.Item style={{height:"80vh"}}> 
                            <a href={e.url}>
                            <img 
                            src={e.img} 
                            alt={`Banner imgae ${i+1}`} 
                            className='d-block w-100'/>
                            </a>
                        </Carousel.Item>
                    )
                })}
                <div className='slider-contoller-div'>
                {start.map((e,i) => {
                    return(
                        <div className={`slider-contoller-item ${i === active && 'active'}`}  onClick={() => {setActive(i)}}></div>
                    )
                })}
                </div>
            </Carousel>
        </>
    )
}

export default Slider
