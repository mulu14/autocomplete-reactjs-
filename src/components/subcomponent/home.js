import React , {Component} from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import Autocomplet from './autocomplete'
import WeatherComponent from './smhi'
import Card from '@material-ui/core/Card';
import requestWeatherData from './../../redux/api/smhi/smhi'



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            place: {},
            lat: '', 
            log: ''
        };
        this.filterTempreatue = this.filterTempreatue.bind(this); 
        this.filterWindDirection = this.filterWindDirection.bind(this); 
        this.filterwindSped = this.filterwindSpeed.bind(this); 
        this.getStatefromChild = this.getStatefromChild.bind(this)
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
  
    getStatefromChild =(data)=>{
        this.setState({
            ...this.state, 
             place: data, 
             lat: data.lat, 
             log: data.log
        })

    }

    handleSubmit =(e)=>{
        const requestData = Object.assign({
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
              <Autocomplet
               getStatefromChild = {this.getStatefromChild}
               handleSubmit = {this.handleSubmit}
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
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        requestWeatherData : data =>dispatch(requestWeatherData(data))
    }
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
