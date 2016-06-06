var axios = require('axios');

const MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=2fdd4a04dafaf20bc3fe0a646f8165c1';

module.exports = {
	getTemp: function(city) {
		city = encodeURIComponent(city);
		var requestURL = `${MAP_URL}&q=${city}`;

		return axios.get(requestURL).then(function(res) {
			if(res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			}
			else {
				return res.data.main.temp;
			}
		}, function(err) {
			console.log('Error: ' + err);
			throw new Error(err.data.message);
		});
	}
}