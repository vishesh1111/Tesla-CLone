import React from "react";
import styled from "styled-components";


// declaring Function 
// passing props in curly braces
 function Section({ title , description , leftBtnText , rightBtnText, backgroundImg }) {
  return (
    // important background image changing section to section to show diffrent images its neccesary
    <Wrap bgImage={backgroundImg}> 
      
      <ItemText>
        <h1> { title } </h1>
        <p> { description }</p>
      </ItemText> 

      <Buttons>
      <ButtonGroup>
        <LeftButton>  
            {leftBtnText}
          </LeftButton>

          { rightBtnText && // so we're telling react to show (right button) if it exist and if it is  not then don't show it!
        <RightButton> 
            {rightBtnText}
          </RightButton>
                  }

                    
      </ButtonGroup>  
      <DownArrow src="/images/down-arrow.svg">
      </DownArrow>
        </Buttons>
      
    </Wrap>
  );
}

export default Section;


// Css
const Wrap = styled.div`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/images/model-s.jpg');
  display:flex;
  flex-direction: column;
  justify-content: space-between;               //verical
  align-items: center;                          //horizontal
  background-image: ${props => `url("/images/${props.bgImage}")` }

`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
      flex-direction:column;
    }

`;

const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height:50px;
    width:256px;
    color:white;
    display:flex;
    justify-content: center;
    align-itmes: center;
    border-radius:25px; 
    opacity:0.85;
    text-transform:uppercase;
    margin:8px;
    // line hieght
    vertical-align: middle;
    cursor: pointer;
    float: center;


`
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
  cursor: pointer;
`;

const DownArrow = styled.div` 
  height: 40px;
  overflow-x : hidden;
  animation: animatedown infnite 1.5s;
`
const Buttons = styled.div`

`

