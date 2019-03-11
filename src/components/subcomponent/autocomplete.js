import React, {Component} from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import autocomplete from './../../redux/api/autocomplete/autocomplete'
import  requestWeatherData from './../../redux/api/smhi/smhi'

const style ={
    listStyle: 'none'
}
class AutoCompleteComponent extends Component {
    constructor(props) {  
        super(props) 
        this.placeSuggestion = ['Uppsala', 'Stockholm', 'Malmo', 'Lund']; 
        this.state = {
            placename: '', 
            lat: '', 
            lng : '',
            suggestionsList: []
        }
    }

    componentDidMount(){
        this.props.requestWeatherData()
    }

    
    handleChange =(e)=>{
        const value = e.target.value; 
       
        let suggestions = []; 
        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i')
            suggestions = this.placeSuggestion.sort().filter(value=> regex.test(value)); 
        }
        this.setState({
            ...this.state, 
            suggestionsList: suggestions, 
            placename: value
        })
    }

    suggestedSelected =(value)=>{
        this.setState({
            placename: value, 
            suggestionsList: []
        })
    }

    renderSuggetion =()=>{

        if(this.state.suggestionsList === 0){
            return null; 
        }
        return (
            <ul>
                {this.state.suggestionsList.map((place)=>
                   <li key={place} onClick={()=>this.suggestedSelected(place)}>{place}</li>
                 )}
            </ul>
        )
    }
    render() {
        return (
            <div>
                <div>
                 <form onSubmit={this.handleSubmit} style={style}>
                    <li>
                    <input 
                      value={this.state.placename}
                      onChange={this.handleChange}
                      type="text"
                      /></li>
                    <li> <button>Search</button> </li>
                </form>
                </div>
                <div>{this.renderSuggetion()}</div>
                
            </div>
        );
    }
}

const mapStateToProps =state =>{
    return{
        onprogress : state.authcomplete.onprogress , 
        
    }
}
const mapDispatchToProps=dispatch=>{
    return {
      autocomplete: data =>dispatch(autocomplete(data)), 
      requestWeatherData :() =>dispatch(requestWeatherData())
    }
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AutoCompleteComponent));
