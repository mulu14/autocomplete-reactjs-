import React , {Component} from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import AutoCompleteComponent from './autocomplete'

const style ={
    listStyle: 'none'
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placename: '',
            lat: '', 
            long: ''

        };
        this.setStatefromChild = this.setStatefromChild.bind(this)
    }

   
    setStatefromChild =()=>{
        this.setState({
            
        })
    }

    render() {
        return (
            <div>
              <AutoCompleteComponent
               setStatefromChild ={this.setStatefromChild}
              />
            </div>
        );
    }
}
const mapStateToProps =state =>{
    return{

    }
}
const mapDispatchToProps=dispatch=>{
    return {

    }
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
