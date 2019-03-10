import React, {Component} from 'react';
const google = window.google; 

const style ={
    listStyle: 'none'
}
class AutoCompleteComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
         placename: '',
         autocomplete: '', 
        };
    }

    componentDidMount(){
        this.setState({
            ...this.state,
            /*autocomplete: new google.maps.places.AutoComplete(
                this.state.placename,{type: ['geocode']*/
            })
    }
    
    handleChange =(e)=>{
        this.setState({
            ...this.state,
            placename: e.target.value
        });
    }

    render() {
        return (
            <div>
                 <form onSubmit={this.handleSubmit} style={style}>
                    <li>
                    <input name="placename" 
                      value={this.state.placename}
                      onChange={this.handleChange}
                      /></li>
                    <li> <button>Search</button> </li>
                </form>
            </div>
        );
    }
}

export default AutoCompleteComponent;
