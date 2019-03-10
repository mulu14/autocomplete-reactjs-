import React from 'react';
import {  Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  padding: 0,
};

const NavbarComponent =()=> {
        return (
         <AppBar>
            <Toolbar>
              <List component="nav" style={flexContainer}>
                 <ListItem><Link  to="/">Home </Link></ListItem>
                 <ListItem> <Link  to="/about">About</Link></ListItem>
                <ListItem> <Link  to="/contact">Contact</Link></ListItem>
                <ListItem><Link to="/login" >Login </Link></ListItem>
              </List>
            </Toolbar>         
        </AppBar> 
        );
    }


export default NavbarComponent;

