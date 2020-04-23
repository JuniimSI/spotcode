import React, { Fragment } from 'react';
import { Navbar, Button, Container, Columns, Dropdown } from 'react-bulma-components';
import logoImage from '../../assets/images/logo.png'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

 
const ColumnsFullWidth = styled(Columns)`
  width: 100%;
  padding-top: 20px;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  
`
const NavbarWithBorder = styled(Navbar)`
border-bottom-color: white !important;
border-bottom-style: solid;
border-bottom-width: 1px;
background-color: black;
box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
`

const Menu = () => {
  let actionButton;
 
  if (useLocation().pathname == '/') {
    actionButton = <a href='/users/sign_in' className="is-pulled-right is-right">
      <Button outlined={true} color="white">ENTRAR</Button>
    </a>
  }
  else {
    actionButton = <Dropdown className='is-pulled-right is-right' color='black' label={<FaUserCircle size="2em" />}>
     <Dropdown.Item value="other">
       <a href='/users/edit'>
        Edit User
       </a>
     </Dropdown.Item>
     <Dropdown.Item value="other">
       <a href='/users/sign_out'>
        LogOut
       </a>
     </Dropdown.Item>
   </Dropdown>
  }
 
  return (
    <Fragment>
      <NavbarWithBorder color="black">
        <Container>
          <ColumnsFullWidth className='is-mobile'>
            <Columns.Column desktop={{size: 2}} mobile={{size: 5}}>
              <Link to={`/discovery`}>
                <img src={logoImage}/>
              </Link>
            </Columns.Column>
            <Columns.Column>
              {actionButton}
            </Columns.Column>
          </ColumnsFullWidth>
        </Container>
      </NavbarWithBorder>
    </Fragment>
  );
}
export default Menu;