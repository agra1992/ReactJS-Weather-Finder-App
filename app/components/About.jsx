var React = require('react');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>This is a React JS application to find the weather of the city. Enter a city name and view it's current weather.</p>
			<p>Tools used for development:</p>
			<ul>
				<li><a href="https://facebook.github.io/react" target="_blank">React</a>&nbsp;This was the JS Framework used</li>
				<li><a href="http://openweathermap.org" target="_blank">Open Weather Map</a>&nbsp;OpenWeatherMap API was used too get real-time weather information.</li>
				<li><a href="https://github.com/agra1992/ReactJS-Weather-Finder-App" target="_blank">GitHub</a>&nbsp;View the GitHub repository.</li>
			</ul>
		</div>
	);
}

module.exports = About;