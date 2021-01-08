import './App.css';
import {Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Header from './Header';
import UpForm from './UpForm';
import Transform from './Transform';
import { useEffect, useState } from 'react';

function App() {

  // const [navbar,setNavbar]=useState(false);

  // const changeNav=()=>{
  //   // console.log(window.scrollY);
  //   if(window.scrollY>=100){
  //     setNavbar(true);
  //   }
  //   else{
  //     setNavbar(false);
  //   }
  //   // var scrolled = document.scrollingElement.scrollTop;
  //   // console.log(scrolled)
  //   // if (scrolled >= 120) {
  //   //   setNavbar(true);
  //   // } else {
  //   //   setNavbar(false);
  //   // }
  // }

  // function scrollFunction() {
  //   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  //     document.getElementById("header").style.display = "none";
  //     document.getElementById("upform").style.display = "block";
  //   } else {
  //     document.getElementById("header").style.display = "block";
  //     document.getElementById("upform").style.display = "none";
  //   }
  // }

  // window.addEventListener('scroll',changeNav);

  useEffect(() => {
    
    const handleScroll = () => {
      console.log(window.scrollY)
      if (window.scrollY > 200) {
        document.querySelector(".navbar").className = "navbar scroll";
        document.querySelector(".boom").className = "boom";
      } else {
        
        document.querySelector(".navbar").className = "navbar";
        document.querySelector(".boom").className = "boom hide";
      }
    };
    handleScroll();
    window.addEventListener('scroll',handleScroll);
    
  }, [])

  



  return (
    <div className="App">
      

<nav className="navbar">
  <ul>
      <button>🞬</button>
    <li> 
      
      <a href="#aboutMe"> About Me </a>
    </li>
    <li>
      
       <a href="#projects"> Projects </a>
    </li>
    <li>
      
      <a href="#cv"> CV </a>
    </li>
    <li>
      
      <a href="#contacts"> Contacts </a>
    </li>
  </ul>
</nav>

       {/* <UpForm className="boom"/> */}
       <div className="boom" style={{top:"0",backgroundColor:"black",height:"200px",position:"fixed",width:"100%",zIndex:"10"}}></div>


      <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Redirect to="/" />
                
      </Switch>
      
    </div>
  );
}

export default App;
