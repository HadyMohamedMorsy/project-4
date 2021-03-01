import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Navbar from './componete/Navbar/Navbar';
import Header from './componete/Header/index.js';
import Intero from './componete/Intro/index';
import Services from './componete/service-s/index';
import Accelerate from './componete/Accelerate Business/index';
import Call from './componete/call me/index';
import Testemonia from './componete/Testimonials/index';
import Project from './componete/projects/index';
import Team from './componete/Our Team/index';
import About from './componete/About/index';
import Contact from './componete/contact/index';
import Footer from './componete/footer/index';


class App extends React.Component {
  state = {
    count : 0
  }
  scrollwindr = (navbar) =>{
    const NavbarNormal = navbar;
    let NavbarHight = NavbarNormal.getBoundingClientRect().height;
    window.addEventListener('scroll',()=>{
      const WindowHight = window.pageYOffset;
      if(WindowHight > NavbarHight){
        NavbarNormal.classList.add('collapse');
      }else{
        NavbarNormal.classList.remove('collapse');
      }

    })
  }
  changing = (change) =>{
    let changing = change;
    const AllTerminalss = ['SOLUTION','SERVICES','TEMPLATE'];
    let count = -1;
    setInterval(()=>{
      count++;
      changing.innerHTML = AllTerminalss[count];
      if(count >= AllTerminalss.length-1){
        count = -1;
      };
    },2500)
  }

  clickableChange = (e) =>{

    const local = document.querySelectorAll('.local');


    let classesadd = document.getElementById(e.target.dataset.here);

    if(classesadd.classList.contains('local')){

      classesadd.classList.remove('local');

    }else{
      classesadd.classList.add('local');

    }

    if(classesadd.classList.contains('local')){
      local.forEach((item)=>{
        item.classList.remove('local');
      })
  
    }

  }

  clickactive = (e) =>{
     let active = document.querySelectorAll('.active');
     let chiledofsecound = document.querySelectorAll('.chiled-of-secound');
     active.forEach((item)=>{
      item.classList.remove('active')
     })

     chiledofsecound.forEach((item)=>{
       item.style.display = 'none';
     })

    const cassid = document.getElementById(e.target.dataset.active);


    const classess = e.target;

    if(classess.classList.contains('active')){
      classess.classList.remove('active');

    }else{
      classess.classList.add('active');
      cassid.style.display = 'block';
    }


  }

  shuuffel = (e) =>{

    const all = document.querySelectorAll('.element-item');

    all.forEach((item) => {
      item.style.display = `none`;

    })


    
    const query = `.${e.target.dataset.filter}`;

    const shuffel = document.querySelectorAll(query);
    
    if(query === '.All'){
      all.forEach((item)=>{
        item.style.display = 'block';
      })
    }else{
      shuffel.forEach((item)=>{

        item.style.display = 'block';
      })
    }

    const button = document.querySelectorAll('.button');

    button.forEach((item)=>{
      item.classList.remove('is-checked')

    })

    e.target.classList.add('is-checked');

  }

  
  render(){
    return(
      <BrowserRouter >
        <Navbar getid= {this.scrollwindr}/>
        <Header getclass = {this.changing} />
        <Intero />
        <Services />
        <Accelerate getdataset = {this.clickableChange} getactive = {this.clickactive}/>
        <Testemonia  increaseslider = {this.increaseslider} decreaseslider = {this.decreaseslider}/>
        <Call />
        <Project shuuffel = {this.shuuffel}/>
        <Team />
        <About />
        <Contact />
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;

