import React, {Component} from 'react';

const style ={
    listStyle: 'none'
}
class AutoComplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
         placename: ''
        };
    }

    componentDidMount(){
        
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

export default AutoComplete;
