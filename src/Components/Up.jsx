var React = require('react');

var Up = React.createClass({
	render: function(){
		
		var panelStyle = {
			margin: "12px 12px 15px 0px",
			paddingLeft: 10,
			width: 155
		}

		var panelHeadingStyle = {
			background: 'white',
			fontWeight: 'bold',
			border: 'none',
			fontSize: '1.2em',
			padding: "30px 20px 0 0",
			color: '#6C6B6B'
		}

		var panelBodyStyle = {
			padding: "5px 20px 30px 0",
			fontSize: '0.7em',
			color:'#BFBCBC'
		}

		return (
			<div className="panel panel-default col-sm-4 col-m-4 col-xs-12" style = {panelStyle}>
  				<div className="panel-heading " style = {panelHeadingStyle}> {this.props.headerValue} </div>
  				<div className="panel-body" style={panelBodyStyle} > {this.props.bodyValue} </div>
			</div>
			)
	}

});

module.exports = Up;