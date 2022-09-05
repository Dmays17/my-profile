import Home from './Home';
import Project from './Project';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';

function Navigation() {
    return (
        <div>
            <ul>
                <li>
                   <a href={<Home/>}>Home</a> 
                </li>
                <li>
                   <a href={<Project/>}>Project</a> 
                </li>
                <li>
                   <a href={<AboutMe/>}>About Me</a> 
                </li>
                <li>
                   <a href={<ContactMe/>}>Contact Me</a> 
                </li>
            </ul>
        </div>
    );
  }
  
  export default Navigation;


  
