import { useNavigate } from 'react-router-dom';
import {useState} from "react"
import axios from "axios"
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row"

function ContactMe() {

  const navigate=useNavigate();
  const [contact,setContact]=useState({
    firstname:"",
    lastname:"",
    company:"",
    email:"",
    phonenumber:""
  })


const handleChange=(e)=>{
  const {name,value}=e.target;

  setContact((prev)=>{
    return({
      ...prev,
      [name]:value,
    })
  })
}

const handleClick = (e) => {
  e.preventDefault()
  axios
  .post("http://localhost:5002/create",contact)
   .then((res)=>console.log(res))
   .catch((err)=> console.log(err))
}
// useEffect(()=>{
//   console.log(contact)
// },[contact])

    return (
      <div className="Title">
        <Row className="justify-content-center">
<Card style={{ width: '35rem',textAlign:'center' }}>
<Card.Title>Contact Me</Card.Title>
<Form>
<Row className="mb-3">
      <Form.Group as={Col} controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        
        <Form.Control type="firstname" name="firstname" value={contact.firstname} placeholder="Enter first name" onChange={handleChange}/>
        
      </Form.Group>
  
      <Form.Group as={Col} controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        
        <Form.Control type="lastname" name="lastname" value={contact.lastname} placeholder="Enter last name" onChange={handleChange}/>
        
      </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Company Name</Form.Label>
        <Form.Control type="company" name="company" value={contact.company} placeholder="Enter company name" onChange={handleChange}/>
      </Form.Group>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={contact.email} placeholder="Enter email" onChange={handleChange}/>
      </Form.Group>

      <Form.Group as={Col} controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="Number" name="phonenumber" value={contact.phonenumber} placeholder="Phone Number" onChange={handleChange}/>
      </Form.Group>
      </Row>
      <Button onClick={handleClick} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Card>
    </Row>
        {/* <Form>
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="Name " placeholder="Your name.."/>
            <br/>
            <label for="fname">Email</label>
            <input type="text" id="fname" name="Email " placeholder="Your Email.."/>
            <br/>
            <label for="fname">Phone Number</label>
            <input type="number" id="fname" name="Phone Number " placeholder="Your Phone Number.."/>
            <br/>
            <input type={"submit"} value="Submit"/>
        </Form> */}

      </div>
    );
  }
  
  export default ContactMe;

