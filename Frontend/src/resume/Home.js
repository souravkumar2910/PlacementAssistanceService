import React, { useEffect } from 'react'
import { Container,Button } from "reactstrap"; 
import { Link } from 'react-router-dom'

const Home = () => {
  useEffect(()=>{
    document.title="Home";
  })
  return (
    <div>
        <div className='p-5 mb-4 bg-light rounded-3'>
            
            <div className='text-center'>
            <h3>This is Resume Builder Application</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque maiores
                corporis in. Dicta quod inventore voluptate laudantium et facere soluta!</p>
            <Container>
                <Button color='primary'>Learn More</Button>
                
            </Container>
            
            </div>
        </div>
        <Container className='text-center'>
              <Link className='btn btn-info' to="/resume/templates">Generate Resume</Link>
        </Container>
    </div>
  )
}

export default Home