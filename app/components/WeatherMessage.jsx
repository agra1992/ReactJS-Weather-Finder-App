var React = require('react');
/*
var WeatherMessage = React.createClass({
	render: function() {

		var {city, temp} = this.props;

		return (
			<div>
				<h4>City: {city}</h4>
				<h4>Temperature: {temp}</h4>
			</div>
		);
	}
}); */

var WeatherMessage = ({city, temp}) => {
	//var {city, temp} = props;

	return (
		<div>
			<h4>It's {temp} &deg; C in {city}</h4>
		</div>
	);
}

module.exports = WeatherMessage;