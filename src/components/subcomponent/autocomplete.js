import React from "react";
/* global google */
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.autocompleteInput.current,
      { types: ["geocode"] }
    );
    this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
  }

  handlePlaceChanged() {
    const place = this.autocomplete.getPlace();
    const lat = this.autocomplete.getPlace().geometry.location.lat().toFixed(4);
    const log = this.autocomplete.getPlace().geometry.location.lng().toFixed(3)
    const data = Object.assign({
      place: place, 
      lat: lat, 
      log: log
    })
    this.props.getStatefromChild(data);
  }

  render() {
    return (
      <Card>
          <CardContent>
            <input
                ref={this.autocompleteInput}
                id="autocomplete"
                placeholder="Enter your address"
                type="text"
            />
            </CardContent>
            <CardActions><Button onClick={this.props.handleSubmit}>Search</Button></CardActions>
      </Card>
    );
  }
}

export default Autocomplete;
