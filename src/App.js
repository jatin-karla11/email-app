import './App.css';
import {Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Header from './Header';
import UpForm from './UpForm';
import Transform from './Transform';
import { useState } from 'react';

function App() {

  const [navbar,setNavbar]=useState(false);

  const changeNav=()=>{
    // console.log(window.scrollY);
    if(window.scrollY>=100){
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
    // var scrolled = document.scrollingElement.scrollTop;
    // console.log(scrolled)
    // if (scrolled >= 120) {
    //   setNavbar(true);
    // } else {
    //   setNavbar(false);
    // }
  }

  // function scrollFunction() {
  //   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  //     document.getElementById("header").style.display = "none";
  //     document.getElementById("upform").style.display = "block";
  //   } else {
  //     document.getElementById("header").style.display = "block";
  //     document.getElementById("upform").style.display = "none";
  //   }
  // }

  window.addEventListener('scroll',changeNav);

  return (
    <div className="App">
      {navbar?<><UpForm/></>:<><Header/></>}
      {/* <Header id="header"/>
      <UpForm id="upform"/>
       */}
      <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Redirect to="/" />
                
      </Switch>
      
    </div>
  );
}

export default App;
