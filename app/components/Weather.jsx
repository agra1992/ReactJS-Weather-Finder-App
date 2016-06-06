var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var WeatherAPI = require('WeatherAPI');

var Weather = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false,
			errorMessage: null
		};
	},

	componentDidMount: function() {
		var location = this.props.location.query.location;

		if(location && location.length > 0) {
			this.getCityName(location);
			window.location.hash = '#/';
		}
	},

	componentWillReceiveProps: function(newProps) {
		var location = newProps.location.query.location;

		if(location && location.length > 0) {
			this.getCityName(location);
			window.location.hash = '#/';
		}
	},

	getCityName: function(cityName) {

		var that = this;

		this.setState({
			isLoading: true,
			errorMessage: undefined,
			location: undefined,
			temp: undefined
		});

		if(cityName) {
			WeatherAPI.getTemp(cityName).then(function(temp) {
				that.setState({
					city: cityName,
					temp: temp,
					isLoading: false,
					errorMessage: undefined
				});
			}, function(err) {
				that.setState({
					errorMessage: 'Please enter a valid city name.',
					isLoading: false
				});
			});
		}
		else {
			this.setState({
				city: null,
				temp: null,
				isLoading: true
			});
		}
	},

	render: function() {
		var {isLoading, city, temp, errorMessage} = this.state;

		function renderMessage() {
			if(errorMessage) {
				return <p className="text-center callout alert">{ errorMessage }</p>
			}
			if(!city || !temp) {
				return null;
			}
			else if(isLoading) {
				return <h4 className="text-center callout primary">Retrieving Weather...</h4>
			} else if (temp && city) {
				return <WeatherMessage city={city} temp={temp}/>;
			}
		}

		return (
			<div>
				<h1 className="text-center page-title">Get Weather</h1>
				<WeatherForm getCityName = {this.getCityName} />
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;