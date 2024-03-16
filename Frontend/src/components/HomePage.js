import React from 'react'
import HomeAbout from '../common/HomeAbout';

const HomePage = () => {
  return (
    <div>
        <HomeAbout 
        name="Welcome To Placement Assistance Service"
        para="You can easily learn for Placement"
        btn="Read more.."
        visit="/about" />
    </div>
  )
}

export default HomePage