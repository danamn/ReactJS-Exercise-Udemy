// var React = require('react');
import React from 'react';
import Up from './Up.jsx';
import Weather from './Weather.jsx';
import Down from './Down.jsx';
import Traffic from './Traffic.jsx';

/* var Up = require();
var Weather = require();
var Down = require();
var Traffic = require();

/*class Container extends React.Component {
	constructor(props){
		super(props);
	}
*/
export default class Container extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render (){

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

		var degrees = "18"+String.fromCharCode(176)

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
					<Weather temp = {degrees} location = "Paris" />
					<Traffic title = "New Visitors" value = "1.5k" color = "#0D48DF" />
					<Traffic title = "Bounce Rate" value = "50%" color = "#9D38C3" />
					<Traffic title = "Searches" value = "28%" color = "#C32B2B" />
					<Traffic title = "Traffic" value = "140.5 kb" color = "#14A063" />				
				</div>
			</div>
			)
	}

};
