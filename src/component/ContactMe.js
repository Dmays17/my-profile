
function ContactMe() {
    return (
      <div className="Title">
        <form>
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
        </form>


      </div>
    );
  }
  
  export default ContactMe;

