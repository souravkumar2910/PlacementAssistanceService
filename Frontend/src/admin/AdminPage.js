import React, { useEffect} from 'react'
import Admin from './Admin';


const AdminPage = () => {

    useEffect(() =>{
        document.title="Admin Page";
    });
 

  return (
    <div>
        <Admin />
    </div>
  )
}

export default AdminPage