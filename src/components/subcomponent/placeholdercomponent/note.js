import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const Note =(props)=>{
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          Some note on assignment
        </Typography>
        <Typography component="p">
          SMHI does not have weather farcast/statistics more than 10 days, so no comparable data from last year
        </Typography>
        <br/>
        <Typography component="p">
          I assume the wether condition includes (temprature, wind direction and windspeed), 
          if that is not the case, the other data is avilable on redux store and it is possible filter and display
        </Typography>
        <br/>
        <Typography component="p">
          Accessing autocomplte with url is not responding data, so i used google autocomplete function, 
          please find the error image on image component
        </Typography>
        <br/>
        <Typography component="p">
          Please find the source code on git: https://github.com/mulu14/autocomplete-reactjs-
        </Typography>
        <Typography component="p"> 
          "npm test " to run test
        </Typography>
      </Paper>
    </div>
  );
}

Note.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Note);
