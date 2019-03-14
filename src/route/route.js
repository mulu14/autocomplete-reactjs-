import React from 'react'
import Home from './../components/subcomponent/home'
import Note from './../components/subcomponent/placeholdercomponent/note'
import Image from '../components/subcomponent/placeholdercomponent/image'
import Login from './../components/subcomponent/placeholdercomponent/login'
import { Switch, Route } from 'react-router'

const RouteComponent =()=>{
   return(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/note" component={Note}/>
        <Route path="/image" component={Image}/>
        <Route  path="/login"  component={Login}/>
     </Switch>
   )
}

export default RouteComponent; 