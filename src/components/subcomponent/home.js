import React , {Component} from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import AutoCompleteComponent from './autocomplete'
import WeatherComponent from './smhi'
import Card from '@material-ui/core/Card';
import throttle from 'lodash/throttle';
import autocomplete from './../../redux/api/autocomplete/autocomplete'
import requestWeatherData from './../../redux/api/smhi/smhi'



class Home extends Component {
    constructor(props) {
        super(props);
        this.placeSuggestion = ['Uppsala', 'Stockholm', 'Malmo', 'Lund']; 
        this.state = { 
            suggestionsList: [], 
            lat: '', 
            long: ''
        };
        this.filterTempreatue = this.filterTempreatue.bind(this); 
        this.filterWindDirection = this.filterWindDirection.bind(this); 
        this.filterwindSped = this.filterwindSpeed.bind(this); 
        this.handleChange = this.handleChange.bind(this); 
        this.suggestedSelected = this.suggestedSelected.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
   

    filterTempreatue =()=>{
        if (this.props.weatherResponse.length > 0){
           let tempreture =  this.props.weatherResponse[0].parameters.filter(data =>data.name ==="t")
           return tempreture[0].values[0]; 
        }
    }
    filterWindDirection =()=>{
        if (this.props.weatherResponse.length > 0){
            let winddirection =   this.props.weatherResponse[0].parameters.filter(data =>data.name ==="wd")
            return winddirection[0].values[0]; 
         }
    }
    filterwindSpeed =()=>{
        if (this.props.weatherResponse.length > 0){
            let winddirection = this.props.weatherResponse[0].parameters.filter(data =>data.name ==="ws")
            return winddirection[0].values[0]; 
         }
    }

    setQuery = throttle((query)=>{
        let suggestions = []; 
        if(query.length > 0){
            const regex = new RegExp(`^${query}`, 'i')
            suggestions = this.placeSuggestion.sort().filter(value=> regex.test(value)); 
        }
        this.setState({
            ...this.state, 
            suggestionsList: suggestions, 
            placename: query
        }, 
        ()=>{
            this.props.autocomplete(query)
        }
        )
    }, 200)

    handleChange =(e)=>{
        const value = e.target.value; 
        this.setQuery(value)
       /*
        let suggestions = []; 
        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i')
            suggestions = this.placeSuggestion.sort().filter(value=> regex.test(value)); 
        }
        this.setState({
            ...this.state, 
            suggestionsList: suggestions, 
            placename: value
        }, 
        ()=>{
            this.props.autocomplete(value)
        }
        )*/
    }


    suggestedSelected =(value)=>{
        this.setState({
            placename: value, 
            suggestionsList: []
        })
    }

    handleSubmit =(e)=>{
        e.preventDefault();
        const createdate = new Date(); 
        const requestData = Object.assign({
             current: createdate.toISOString(), 
             lon: 16.158, 
             lat: 58.5812
        })
        this.props.requestWeatherData(requestData)
    }
    
    render() {
        const renderData = ()=>{
            return (
                <WeatherComponent
                tempreatue= {this.filterTempreatue}
                winddirection ={this.filterWindDirection}
                windspeed= {this.filterwindSpeed}
                />
            )
        }
        
        return (
            <div>
               <Card>
              <AutoCompleteComponent
               handleChange = {this.handleChange}
               suggestedSelected = {this.suggestedSelected}
               suggestionsList = {this.state.suggestionsList}
               handleSubmit = {this.handleSubmit}
               placename = {this.state.placename}
              />
              </Card>
              <Card>
              {this.props.weatherResponse.length > 0? renderData():null}
              </Card>
            </div>
        );
    }
}
const mapStateToProps =state =>{
    return{
        weatherResponse: state.weather.successRequestSmhicurrent || [], 
        placesuggestion : state.authcomplete.placesuggestion
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        autocomplete: data =>dispatch(autocomplete(data)), 
        requestWeatherData : data =>dispatch(requestWeatherData(data))
    }
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
