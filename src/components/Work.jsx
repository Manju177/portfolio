import React from 'react'
import img from '../assets/img.jpg'
import img1 from '../assets/home (2).jpg'
import img2 from '../assets/bgimg.jpg'


function Work() {
    const handleClick=(action)=>{
        window.location.assign(action)
    }
  return (
    <div className='Work'>
        <h1 className='serviceHeading'>Work</h1>
        <div>
            <img src={img} alt='_blank' onClick={()=>handleClick("https://github.com/Manju177/chakra-ui")}/>
            <img src={img1} alt='_blank' onClick={()=>handleClick("https://github.com/Manju177/React-pro")}/>
            <img src={img2} alt='_blank'/>
        </div>

    </div>
  )
}

export default Work