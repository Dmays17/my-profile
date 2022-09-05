
import {BrowserRouter as Router,Link} from 'react-router-dom'
function Home() {
    return (
        
      <div className="Title">
        <h2>Hi, I'm David A Web Developer </h2>
        <Link to="/ContactMe">
        <button > Contact Me </button>
        </Link>    
      </div>
      
    );
  }
  
  export default Home;