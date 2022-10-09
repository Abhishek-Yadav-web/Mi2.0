import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/banner.css'

const Banner = ({banner}) => {
    const [active,setActive] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setActive(selectedIndex);
      };
    return (
        <>
        <Carousel fade activeIndex={active} onSelect={handleSelect} style={{"height":"80vh"}}>
        {banner.end.map((item,index)=>(
            <Carousel.Item key={item.image} style={{"height":"80vh"}} id="banner" interval={1000} keyboard={true}>
                <img
                className="d-block w-100 h-100"
                id="bannerImage"
                src={item.image}
                alt={`${index} banner`}
                />
                <Carousel.Caption className='items'>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>{item.source}</p>
                    <a href={item.url}>Read more</a>
                </Carousel.Caption>
            </Carousel.Item>

        ))}
        </Carousel>
        <div className="contoller-div">
            {
                banner.end.map((item,index)=>{
                    return(
                        <div className={`contoller-item ${index === active && 'active'}`} onClick={() => {setActive(index);}}></div>
                    )
                })
            }
        </div>
        </>
    )
}

export default Banner