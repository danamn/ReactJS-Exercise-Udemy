var React = require('react');

var Weather = React.createClass({

		render: function(){

		var panelStyle = {
			margin: '10px 7px 0 0px',
			width: 160,
			paddingLeft: 25,
			background: 'orange',
			textAlign: "center"
		}

		var panelHeadingStyle = {
			
			border: 'none',
			fontSize: '1.8em',
			paddingTop: 18,
			paddingLeft: 15,
			paddingRight: 20,
			paddingBottom: 0, 
			color: 'white',
			background: 'orange'
		}

		var panelBodyStyle = {
			paddingTop: 0,
			paddingLeft: 0,
			paddingRight: 20,
			paddingBottom: 45,
			fontSize: '0.7em',
			color:'white'
		}	

		return (
			<div className="panel panel-default col-sm-3 col-m-3" style = {panelStyle}>
  				<div className="panel-heading " style = {panelHeadingStyle}> {this.props.temp} </div>
  				<div className="panel-body" style={panelBodyStyle} > {this.props.location} </div>
			</div>

			)
		
	}

});

module.exports = Weather;