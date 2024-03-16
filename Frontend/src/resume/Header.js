import React from 'react'
import { Card, CardBody, Container } from 'reactstrap'

const Header = () => {
    return (
        <div>
            <Container>
                <Card className='text-center' style={{color:"white",backgroundColor:"blue"}}>
                    <CardBody>
                        <h1>Resume Builder Application</h1>
                    </CardBody>
                </Card>
            </Container>
        </div>
    )
}

export default Header