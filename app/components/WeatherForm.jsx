var React = require('react');

var WeatherForm = React.createClass({
	getInitialState: function() {
		return {
			error: null
		};
	},

	render: function() {

		return (
			<div>
				<form onSubmit={this.sendCityName}>
					<input type="text" placeholder="Enter a city name like San Francisco, CA..." ref="cityName"/>
					<button className="button expanded hollow">Get Weather</button>
					{this.errorMessage()}
				</form>
			</div>
		);
	},

	errorMessage: function() {

		if(! this.state.error) return null;
		return <p className="text-center callout alert">{this.state.error}</p>;
	},

	sendCityName(event) {

		event.preventDefault();

		var cityRef = this.refs.cityName;
		var cityName = cityRef.value;

		if(cityName.length > 0) {
			this.props.getCityName(cityName);
			this.setError(undefined);
		}
		else
			this.setError('Please enter a city name');

		cityRef.value = '';
	},

	setError: function(err) {

		if(! err) {
			this.setState({
				error: null
			});	
		}
		else {
			this.setState({
				error: err
			});
		}
	}
});

module.exports = WeatherForm;