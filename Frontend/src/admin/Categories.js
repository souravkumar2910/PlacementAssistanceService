import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaEdit,FaTrashAlt } from 'react-icons/fa';
import CategoryService from '../services/CategoryService';
// import './style.css';


const Categories = () => {

    const [categories, setCategories] = useState([]);

    const loadData = () =>{
        CategoryService.getAllCategory()
            .then((response) => {
                // console.log(response);
                setCategories(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        loadData();
    }, []);

    const deleteCategpry = (cid) =>{
        console.log(cid);
        CategoryService.delete(cid)
        .then((response) => {
           loadData();
        })
        .catch((error) => {
            console.log(error);
        })
    };


    return (
        <div>
            <h4>
                List of Categories
            </h4>
            <hr />
            <Link to="/admin/add-category" className="btn btn-success mb-2">Add Category</Link>
            <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (categories.length !== 0) && categories.map((item) => (
                                <tr key={item.cid}>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td>
                                        <Link to={`/admin/category/edit/${item.cid}`} className=""><FaEdit /></Link>
                                        <FaTrashAlt onClick={() => deleteCategpry(item.cid)} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Categories