import React,{useEffect, useState} from 'react'
import { Button, Container, Form, FormGroup, Input, Col,Row, Label } from 'reactstrap'
// import { ToastContainer, toast } from 'react-toastify';
import CategoryService from '../services/CategoryService';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';

const AddCategory = () => {

    const [category,setCategory] = useState({
        title:'',
        description:'',
        cid:null
    });

    let navigate = useNavigate();
    const {id} = useParams();

    // const getCateId = sessionStorage.getItem("cateId");
    // console.log(JSON.parse(getCateId));
    // const id = JSON.parse



    useEffect(() => {
        if(id){
            CategoryService.get(id)
            .then((category) => {
                setCategory({title:category.data.title,description:category.data.description});
            })
            .catch((error) =>{
                console.log(error);
            })
        }
    },[id]);

    const addCategories = (e) =>{
        e.preventDefault();
        const getId = parseInt(id,10);
        if(getId){
            //   // Update the Category
            category['cid'] = getId;
            //   console.log(category);
              CategoryService.update(category)
              .then((response) => {
    
                navigate('/admin/view-categories');
    
                // toast.success("Course Added Successfully",{
                //     position: "top-bottom",
                //     autoClose: 2000
                //   });
                //   setCategory({title:"",description:""})
            })
            .catch((error) => {
                console.log(error);
            })
        }else{
              // Add New Category
            CategoryService.create(category)
            .then((response) => {
                // const value = response.data;
                // sessionStorage.setItem("cateId",JSON.stringify(value));
                navigate('/admin/view-categories');
    
                // toast.success("Course Added Successfully",{
                //     position: "top-bottom",
                //     autoClose: 2000
                //   });
                //   setCategory({title:"",description:""})
            })
            .catch((error) => {
                console.log(error);
            })
        }
        
    }


    return (
        <div>
             {/* <ToastContainer/> */}
            <h1 className='text-center'>Add Category</h1>
            <Container>
                <Row>
                    <Col
                        className="bg-info border p-3"
                        md={{
                            offset: 2,
                            size: 8
                        }}
                        sm="12"
                    >
                        {JSON.stringify(category)}
                        <Form>
                            <FormGroup>
                                <Label for='title'>Title</Label>
                                <Input type='text' placeholder='Enter Title' name="title" id="title"
                                 value={category.title}
                                 onChange={(e) =>{ setCategory({...category,title:e.target.value}) } }
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for='description'>Description</Label>
                                <Input type='textarea' placeholder='Enter Description' name="description" id="description"
                                 value={category.description}
                                 onChange={(e) => { setCategory({...category,description:e.target.value}) } }
                                />
                            </FormGroup>

                            <Container>
                                <Button onClick={(e) =>{addCategories(e)}} color='success'>ADD</Button>
                                <Button type='reset' color='warning' style={{ marginLeft: "10px" }}>Clear</Button>
                            </Container>
                        </Form>

                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default AddCategory