import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const  WeatherComponent =(props)=>{
  const degreeTotext = (param)=>{
    let direction = 0; 
    if(param >=0 && param >=90){
      return direction ="N/E"
    }
    if(param >=91 && param <=180){
      return direction ="S/E"
    }
    if(param >=181 && param <=270){
      return direction ="S/W"
    }
    if(param >=271 && param <=360){
      return direction ="N/W"
    }
    return direction; 
  }

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">Tempreatue</TableCell>
            <TableCell align="right">Wind direction</TableCell>
            <TableCell align="right"> Wind speed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell align="right">{props.tempreatue() + " " + "Cel"} </TableCell>
              <TableCell align="right">{props.winddirection() + " " + degreeTotext(props.winddirection())}</TableCell>
              <TableCell align="right">{props.windspeed()+ " " + "m/s"}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}



export default WeatherComponent;

