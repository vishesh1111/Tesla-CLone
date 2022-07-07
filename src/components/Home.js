import React from "react";
import styled from "styled-components";
import Section from "./Section";

// delcaring a funcion
function Home() {
  return (
    <Container>
      
      <Section  // all the section and thier information are below
      title=" Model S"
      description="Order Online For TouchLess Delivery "
      backgroundImg="model-s.jpg"
      leftBtnText="Custom Order"
      rightBtnText="Existing Inventory" 
      />
      
      <Section 
      title="Model Y"
      description="Order Online For TouchLess Delivery "
      backgroundImg="model-y.jpg"
      leftBtnText="Custom Order"
      rightBtnText="Existing Inventory"
      />

      <Section 
      title=" Model 3"
      description="Order Online For TouchLess Delivery "
      backgroundImg="model-3.jpg"
      leftBtnText="Custom Order"
      rightBtnText="Existing Inventory"
      />

      <Section
      title=" Model X"
      description="Order Online For TouchLess Delivery "
      backgroundImg="model-x.jpg"
      leftBtnText="Custom Order"
      rightBtnText="Existing Inventory"
      />  

      <Section 
      title=" Solar Panel"
      description=" Lowest Cost Solar Panels in India "
      backgroundImg="solar-panel.jpg"
      leftBtnText="Order Now"
      rightBtnText="Learn More"
      />
      
      <Section
      title=" Solar Roof"  
      description=" Produce Clean Energy From Your Roof "
      backgroundImg="solar-roof.jpg"
      leftBtnText="Order Now"
      rightBtnText="Learn More" 
      />

      <Section
      title=" Accessories"
      description="  "
      backgroundImg="accessories.jpg"
      leftBtnText="Shop Now"
      />

    </Container>
  );
  }

export default Home;

const Container = styled.div`
  height: 100vh;

`;
