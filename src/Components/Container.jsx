var React = require('react');
var Up = require('./Up.jsx');
var Weather = require('./Weather.jsx');
var Down = require('./Down.jsx');
var Traffic = require('./Traffic.jsx');

/*class Container extends React.Component {
	constructor(props){
		super(props);
	}
*/
var Container = React.createClass({
	
	render: function(){

		var containerStyle = {
			background: '#F2F4F5',
			marginLeft: 0,
			width: 730,
			paddingRight: 0,
			paddingLeft: 15,
			fontFamily: "sans-serif"
		}

		var noPadding = {
			padding: 0,
			margin: 0
		}

		return (
			<div style = {containerStyle} className = 'row'>
				
				<div  className= 'col-sm-9 col-m-9 col-xs-12'>
					<div className="row" style={noPadding}>
						<Up headerValue = "20" bodyValue='New followers added this month' />
						<Up headerValue = "$ 1250" bodyValue='Average Monthly Income' />
						<Up headerValue = "$ 13856" bodyValue='Yearly Income Goal' />
					</div>
					<div style={{paddingRight:'10px'}}>
						<Down color= '#5063C4' />
						<Down color= '#793180' />
					</div>
				</div>	

				<div className = 'col-sm-3 col-m-3 col-xs-12' style={noPadding} >
					<Weather temp = "18&deg;" location = "Paris" />
					
				</div>
			</div>
			)
	}

});

module.exports = Container;