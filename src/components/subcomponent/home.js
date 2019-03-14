import React , {Component} from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import Autocomplet from './autocomplete'
import WeatherComponent from './smhi'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import requestWeatherData from './../../redux/api/smhi/smhi'
import isEmpty from 'lodash/isEmpty'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            place: {},
            lat: '', 
            log: ''
        };
        this.filterTempreatuer= this.filterTempreatuer.bind(this); 
        this.filterWindDirection = this.filterWindDirection.bind(this); 
        this.filterwindSped = this.filterwindSpeed.bind(this); 
        this.getStatefromChild = this.getStatefromChild.bind(this)
        this.returnCurrentDate = this.returnCurrentDate.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    returnCurrentDate =()=>{
        if(this.props.weatherResponse.length >0){
            return this.props.weatherResponse[0].validTime; 
        }
    }
   
    filterTempreatuer =()=>{
        if (this.props.weatherResponse.length > 0){
           let tempreturer =  this.props.weatherResponse[0].parameters.filter(data =>data.name ==="t")
           return tempreturer[0].values[0]; 
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
             log: this.state.log.toFixed(3), 
             lat: this.state.lat.toFixed(4)
        })
        this.props.requestWeatherData(requestData)
    }
    
    render() {
        const renderData = ()=>{
            return (
                <WeatherComponent
                tempreatuer= {this.filterTempreatuer}
                winddirection ={this.filterWindDirection}
                windspeed= {this.filterwindSpeed}
                />
            )
        }
        const ErrorMessage = ()=>{
            return(
             <Paper>
                <Typography>Sorry: You provide wrong address or having problem at getting data</Typography>
            </Paper>
            )      
        }
        
        return (
            <div>
            <Card>
             <CardHeader title={this.props.weatherResponse.length !== 0 && isEmpty(this.props.failedRequest)? this.returnCurrentDate() : null} />
              <Autocomplet
               getStatefromChild = {this.getStatefromChild}
               handleSubmit = {this.handleSubmit}
              />
              </Card>
              <Card>
              {this.props.weatherResponse.length > 0 &&  isEmpty(this.props.failedRequest) ? renderData():null}
              {!isEmpty(this.props.failedRequest)? ErrorMessage(): null}
              </Card>
            </div>
        );
    }
}
const mapStateToProps =state =>{
    return{
        weatherResponse: state.weather.successRequest || [], 
        failedRequest: state.weather.failedRequest || []
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        requestWeatherData : data =>dispatch(requestWeatherData(data))
    }
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
