import React from 'react'
import '../styles/starProduct.css'
import '../data/data'
import data from '../data/data'

const StarProduct = ({}) => {
    return (
        <>
          <div className="starProductBx">
              <div id='leftBx'>
                <a href={data.starProduct[0].url}><img src={data.starProduct[0].image} alt="startProduct" /></a>  
              </div>
              <div id='rightBx'> 
                <a href={data.starProduct[1].url}><img src={data.starProduct[1].image} alt="startProduct" /></a>  
                <a href={data.starProduct[2].url}><img src={data.starProduct[2].image} alt="startProduct" /></a>  
                <a href={data.starProduct[3].url}><img src={data.starProduct[3].image} id="wide" alt="startProduct" /></a>  
              </div>
            </div>  
        </>
    )
}

export default StarProduct
