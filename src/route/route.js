import React from 'react'
import Home from './../components/subcomponent/home'
import About from './../components/subcomponent/placeholdercomponent/about'
import Contact from './../components/subcomponent/placeholdercomponent/contact'
import Login from './../components/subcomponent/placeholdercomponent/login'
import { Switch, Route } from 'react-router'

const RouteComponent =()=>{
   return(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route  path="/login"  component={Login}/>
     </Switch>
   )
}

export default RouteComponent; 