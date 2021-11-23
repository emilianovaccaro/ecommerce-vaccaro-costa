import React from 'react';
import { AppBar } from '@material-ui/core';
import { Link } from "react-router-dom";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';
import CartWidget from '../CartWidget/CartWidget';


function NavBar() {
	return (
		<AppBar position="relative">
			<Wrapper>
				<Left>
					<Link to='/' style={{color:"white"}}><Logo>ECOMM</Logo></Link>
				</Left>
				<Center>
					<Link to='/category/jewelery' style={{color:"white"}}><MenuItem>Jewelry</MenuItem></Link>
					<Link to='/category/electronics'  style={{color:"white"}}><MenuItem>Electronic</MenuItem></Link>
				</Center>
				<Right>
					<Link to='/cart'><MenuItem><CartWidget /></MenuItem></Link>
        </Right>
			</Wrapper>
    </AppBar>
);
}

export default NavBar;