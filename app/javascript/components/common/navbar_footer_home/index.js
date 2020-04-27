import React, { Fragment } from 'react';
import { Navbar, Container, Columns } from 'react-bulma-components';
import styled from 'styled-components'
import { FaSearch, FaHome, FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom'

const NavbarWithBorder = styled(Navbar)`
  border-top-color: white !important;
  border-top-style: solid;
  border-top-width: 1px;
  background-color: black;
`
const ColumnsFullWidth = styled(Columns)`
  width: 100%;
  padding-top: 10px;
`

const NavbarFooterHome = () => {

    return (
        <Fragment>
            <NavbarWithBorder fixed='bottom' >
            </NavbarWithBorder>
        </Fragment>
    );
}
export default NavbarFooterHome;