import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const style ={
    listStyle: 'none'
}
const AutoCompleteComponent =(props)=> {
    
const  renderSuggetion =()=>{

        if(props.suggestionsList === 0){
            return null; 
        }
        return (
            <ul>
                {props.suggestionsList.map((place)=>
                   <li key={place} onClick={()=>props.suggestedSelected(place)}>{place}</li>
                 )}
            </ul>
        )
    }  
        return (
            <div>
                <Card>
                 <form onSubmit={props.handleSubmit} style={style}>
                    <TextField 
                      value={props.placename}
                      name="placename"
                      onChange={props.handleChange}
                      type="text"
                      />
                   <CardActions><Button type="submit">Search</Button> </CardActions>
                </form>
                </Card> 
                <Card>
                    <CardContent>
                        {renderSuggetion()}
                    </CardContent>
                </Card>       
            </div>
        );
}



export default AutoCompleteComponent;

