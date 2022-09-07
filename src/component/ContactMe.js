import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row"

function ContactMe() {
    return (
      <div className="Title">
        <Row className="justify-content-center">
<Card style={{ width: '35rem',textAlign:'center' }}>
<Card.Title>Contact Me</Card.Title>
<Form>
<Row className="mb-3">
      <Form.Group as={Col} controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        
        <Form.Control type="firstname" placeholder="Enter first name" />
        
      </Form.Group>
  
      <Form.Group as={Col} controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        
        <Form.Control type="lastname" placeholder="Enter last name" />
        
      </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Company Name</Form.Label>
        <Form.Control type="company" placeholder="Enter company name" />
      </Form.Group>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group as={Col} controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="Number" placeholder="Phone Number" />
      </Form.Group>
      </Row>
      <Button variant="primary" type="submit">
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

