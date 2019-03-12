import React from 'react';
import {  Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';


const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  padding: 0,
};
const stylecolor = {
  color: 'white', 
  textDecoration : 'none'
}

const NavbarComponent =()=> {
        return (
        <Grid item xs={12}>
         <AppBar>
            <Toolbar>
              <List component="nav" style={flexContainer}>
                 <ListItem><Link  to="/" style={stylecolor}> Home </Link></ListItem>
                 <ListItem> <Link  to="/about" style={stylecolor}>About</Link></ListItem>
                <ListItem> <Link  to="/contact" style={stylecolor}>Contact</Link></ListItem>
                <ListItem><Link to="/login"style={stylecolor} >Login </Link></ListItem>
              </List>
            </Toolbar>         
        </AppBar> 
        </Grid>
        );
    }


export default NavbarComponent;

