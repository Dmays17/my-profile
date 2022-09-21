import {BrowserRouter as Router,Link,Routes,Route}from 'react-router-dom'
import Home from './component/Home';
import Project from './component/Project';
import AboutMe from './component/AboutMe';
import ContactMe from './component/ContactMe';
import './App.css'

function App() {
  return (
    <div className="App">
      {/* <Navigation/> */}
      <Router>
      <header>
      <div className='NavBar'>
        
            <ul>
                <li>
                   <Link to="/" >Home</Link> 
                </li>
                <li>
                    <Link to="/Project" >Project</Link>  
                </li>
                <li>
                    <Link to="/AboutMe" >About Me</Link> 
                </li>
                <li>
                    <Link to="/ContactMe" >Contact Me</Link>  
                </li>
            </ul>
            
        </div>
        </header>

      <div>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/Project"element={<Project/>}/>
          <Route path="/AboutMe"element={<AboutMe/>}/>
          <Route path="/ContactMe"element={<ContactMe/>}/>
        </Routes>
      </div>





        </Router>
    </div>
  );
}

export default App;
