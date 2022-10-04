import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';


const Navb = (props) => {
  
  return (

      <Navbar bg="dark" variant="dark" >
          <Navbar.Brand href="#home" className='ms-4'>Shopping Cart</Navbar.Brand>

     
           <Nav className=" ms-3 ">

            <Nav.Link href="#sign in" className='me-4'onClick={() => props.handleShow(false)}>List</Nav.Link>
            <Nav.Link href="#cart" className='me-4' onClick={() => props.handleShow(true)}>Cart</Nav.Link>



          </Nav>
          <Form className="d-flex "  inline >
            <Form.Control
          
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />

        <Button variant="outline-primary">Search</Button>

          </Form>
      
          <div className='btn btn-outline-primary  ms-3'>Cart
          <sup>{props.count}</sup>
          
          </div>
          
           
          
        

      </Navbar>

  )
}

export default Navb;
