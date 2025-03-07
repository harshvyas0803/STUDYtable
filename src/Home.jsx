import React from "react";
import "./Home.css";
import Title from "./components/title/Title"
import Section1 from "./components/sections/Section1"
import Section2 from "./components/sections/Section2"
import Section3 from "./components/sections/Section3"
import Section4 from "./components/sections/Section4"
import Section5 from "./components/sections/Section5"
import Section6 from "./components/sections/Section6"
import Footer from "./components/footer/Footer"
 

const Home = () => {
 


  
  return (
    <>
             
      <Title></Title>

      <div className="parent-container">

<div className="Sections">

<Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Section6></Section6>
 

</div>
   
      
      </div>
       <Footer></Footer>
       
    </>
  );
};

export default Home;