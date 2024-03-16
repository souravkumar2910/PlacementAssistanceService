import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup } from 'reactstrap'

const Menu = () => {


    // const navigate = useNavigate();
    // const history = useHistory();

    // const routeChange = () => {
    //     navigate('/personal-details',{replace:true});
    // }


  return (
    <div>
        <ListGroup>
            <Link className='list-group-item list-group-item-action' tag="a" to="/" action >
                Home
            </Link>
            <Link className='list-group-item list-group-item-action' tag="a" to="/personal-details" action="true">
                Personal Details
            </Link>
            <Link className='list-group-item list-group-item-action' tag="a" to="/education" action="true">
                Education
            </Link>
            <Link className='list-group-item list-group-item-action' tag="a" to="/add-skills" action="true">
                Add Skills
            </Link>
            <Link className='list-group-item list-group-item-action' tag="a" to="/objective" action="true">
                Objective
            </Link>
            <Link className='list-group-item list-group-item-action' tag="a" to="/experience" action="true">
                Experience
            </Link>
            <Link className='list-group-item list-group-item-action' tag="a" to="/project" action="true">
                Project
            </Link>
            <Link className='list-group-item list-group-item-action' tag="a" to="/hobbies" action="true">
                Hobbies
            </Link>
            <Link className='list-group-item list-group-item-action' tag="a" to="/social-links" action="true">
                Social
            </Link>
            {/* <Link className='btn btn-info' to="/resume/templates">Generate Resume</Link> */}
        </ListGroup>
    </div>
  )
}

export default Menu