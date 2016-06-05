var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var WeatherAPI = require('WeatherAPI');

var Weather = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false
		};
	},

	getCityName: function(cityName) {

		var that = this;

		this.setState({ isLoading: true });

		console.log(cityName);
		WeatherAPI.getTemp(cityName).then(function(temp) {
			that.setState({
				city: cityName,
				temp: temp,
				isLoading: false
			});
		}, function(err) {
			that.setState({
				city: 'NA',
				temp: 'NA',
				isLoading: false
			});
			alert(err);
		});
	},

	render: function() {
		var {isLoading, city, temp} = this.state;

		function renderMessage() {
			if(isLoading) {
				return <h4 className="text-center">Retrieving Weather...</h4>
			} else if (temp && city) {
				return <WeatherMessage city={city} temp={temp}/>;
			}
		}

		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<WeatherForm getCityName = {this.getCityName} />
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;