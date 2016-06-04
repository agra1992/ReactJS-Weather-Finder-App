var React = require('react');
var {Link, IndexLink} = require('react-router');

/*var Nav = React.createClass({
	render: function() {
		const active = {
			fontWeight: 'bold',
			color: 'red'
		};

		return (
			<div>
				<h2>Nav Bar</h2>
				<IndexLink to="/" activeClassName="active" activeStyle={active}>Get Weather</IndexLink>
				<Link to="/about" activeClassName="active" activeStyle={active}>About</Link>
				<Link to="/examples" activeClassName="active" activeStyle={active}>Examples</Link>
			</div>
		);
	}
}); */

var Nav = (props) => {
	const active = {
		fontWeight: 'bold',
		color: 'red'
	};
	
	return (
		<div>
			<h2>Nav Bar</h2>
			<IndexLink to="/" activeClassName="active" activeStyle={active}>Get Weather</IndexLink>
			<Link to="/about" activeClassName="active" activeStyle={active}>About</Link>
			<Link to="/examples" activeClassName="active" activeStyle={active}>Examples</Link>
		</div>
	);
}

module.exports = Nav;