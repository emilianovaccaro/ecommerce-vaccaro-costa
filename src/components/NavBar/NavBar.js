import React from 'react';
import { AppBar } from '@material-ui/core';
import { Link } from "react-router-dom";
import { Wrapper, Logo, MenuItem, Left, Center, Right, Icon } from './styledComponents';
import CartWidget from '../CartWidget/CartWidget';


function NavBar() {
	return (
		<AppBar position="relative">
			<Wrapper>
				<Left>
					<Link to='/' style={{color:"white"}}><Logo>ECOMM</Logo></Link>
				</Left>
				<Center>
					<Link to='/category/jewelery' style={{textDecoration: "none", color:"Black"}}><h1><Icon>Jewelry</Icon></h1></Link>
					<Link to='/category/electronics'  style={{textDecoration: "none", color:"Black"}}><h1><Icon>Electronic</Icon></h1></Link>
					<Link to="/category/women's clothing"  style={{textDecoration: "none", color:"Black"}}><h1><Icon>WClothing</Icon></h1></Link>
					<Link to="/category/men's clothing"  style={{textDecoration: "none", color:"Black"}}><h1><Icon>MClothing</Icon></h1></Link>
				</Center>
				<Right>
					<Link to='/cart'><MenuItem><CartWidget /></MenuItem></Link>
        </Right>
			</Wrapper>
    </AppBar>
);
}

export default NavBar;