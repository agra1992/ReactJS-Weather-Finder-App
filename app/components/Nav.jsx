var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

	onSearch: function(event) {
		event.preventDefault();
		var searchCityName = this.refs.searchInput.value;
		var encodedCity = encodeURIComponent(searchCityName);

		if(searchCityName && searchCityName.length > 0) {	
			this.refs.searchInput.value = '';
			window.location.hash = '#/?location=' + encodedCity;
		}
	},

	render: function() {
		const active = {
			fontWeight: 'bold'
		};

		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">Weather Finder App</li>
						<li><IndexLink to="/" activeClassName="active" activeStyle={active}>Get Weather</IndexLink></li>
						<li><Link to="/about" activeClassName="active" activeStyle={active}>About</Link></li>
						<li><Link to="/examples" activeClassName="active" activeStyle={active}>Examples</Link></li>
					</ul>
				</div>
				<div className="top-bar-right">
					<form onSubmit={this.onSearch}>
						<ul className="menu">
							<li>
								<input type="search" placeholder="Search weather by city name..." ref="searchInput" />
							</li>
							<li>
								<input type="submit" className="button" value="Get Weather" />
							</li>
						</ul>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = Nav;