import React, { Component } from 'react'
import {  Link } from "react-router-dom";
import Layout from './components/layout/layout'
import NavbarComponent from './components/nav/nav'
import RouteComponent from './route/route'
import Grid from '@material-ui/core/Grid';


class App extends Component {
  render() {
    return (
    <Grid
      container
      direction="row"
      justify="center"
      spacing={40}
       >
       <Grid item xs={12}>
      <h1>Hello world</h1>
      <NavbarComponent/>
       </Grid>
      <Grid item xs={8}>
          <RouteComponent/>
      </Grid>
    </Grid> 
     );
  }
}

export default App;



 