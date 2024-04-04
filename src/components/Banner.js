import { Button } from '@mui/material'
import React from 'react'
import videoBg from '../assets/2868173173.mp4'

const Banner = () => {
  return (
    <div className='banner_main'> 
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <h1>Industry-leading stolen <br/> 
             vehicle tracking solutions
            </h1>
            <Button variant="contained">Become an installer</Button>
        </div>
    </div>
  )
}

export default Banner