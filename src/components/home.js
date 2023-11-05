import React from 'react'
import Blogs from './blogs'
import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const searchStyle = {
  "width":"50%",
  "padding":"20px",
  "marginLeft":"auto",
  "marginRight":"auto",
  "position":"sticky",
  "top":"50px",
  // "position":"sticky",
  // "top":"10wh",
  "zIndex":"1"
}
const postStyle = {


  "width":"70%",
  // "padding":"20px",
  "marginLeft":"auto",
  "marginRight":"auto",
  "height":"700px",
  "overflowY":"scroll",
  "zIndex":"2",

  
}
const Home = () => {
  return (
    <>
    <div style={searchStyle} >
    <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
    </div>

    <div style={postStyle} className='scrollBar' >
    <Blogs/>
    </div>
    
    </>
  )
}

export default Home