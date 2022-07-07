import React , { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { style } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';



function Header() {
    const [BurgerStatus, setBurgerStatus ] = useState(false);
    

  return (
    <Container>
        <a>
          <img src="/images/logo.svg" alt="" />
          
        </a>
        
        <Menu>        
          
         <a href="#"> Model S</a>
         <a href="#"> Model 3</a>
         <a href="#"> Model X</a>
         <a href="#"> Model Y</a>


        </Menu>

        <RightMenu>
          <div>
        <a href='#'> Shop</a>
        <a href='#'> Tesla Account</a>
        <CustomMenu onClick={()=>setBurgerStatus(true)} /> 
        </div>
        
        </RightMenu>

        <BurgerNav show={BurgerStatus}>
          <CloseWrapper>
          <CustomClose onClick={()=> setBurgerStatus(false)} />
          </CloseWrapper>
        <li> <a href="#">Existing Inventory </a></li>
        <li> <a href="#">Used Inventory </a></li>
        <li> <a href="#">Trade-In </a></li>
        <li> <a href="#">Cyber Truck </a></li>
        <li> <a href="#">Roadster</a></li>
        <li> <a href="#">Semi</a></li>
        <li> <a href="#">Power Wall </a></li>
        <li> <a href="#">Commerical Energy </a></li>

        </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height:70px;
  dislay:flex;
  align-itmes:center;
  justify-content:space-between;
  padding: 0 20px;
  top:10;
  left:10;
  right:10;
  z-index:10;
`

const Menu = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    justify-content: flex-end;
   

    a{
      text-transform: uppercase;
      font-wieght: 600;
      padding: 0 10px;
      flex-wrap: no-wrap;
      
     

    }
    @media(max-width:768px){
      display:none;
    }

`

const RightMenu = styled.div`
        display:flex;
        flex-direction:column;
        justfy-content:center;
        align-items:center;
        

      a{
        display:flex;
        flex-direction:column;
        justfy-content:center;
        align-items:center;
        float:right;
        text-transform: uppercase;
        font-wieght: 600;
        margin:8px;
       
        
      }
`

const CustomMenu = styled(MenuIcon)`
    display:flex;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: row-reverse;
`

const div = styled.div`
display:flex;
left:100;
align-items:center;
justify-content:center;

`

const BurgerNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background:white;
    width:300px;
    z-index:16;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition:  transfrom 0.2s ease-in-ease-out;
    li{
      padding:15px 0 ;
      border-bottom: 1px solid rgba(0,0,0,.2);
    }

    a{
      font-wieght:600;
    }

`

const CustomClose = styled(CloseIcon)`
    cursor:pointer;
`

const CloseWrapper = styled.div`
      display:flex;
      justify-content:flex-end;

`