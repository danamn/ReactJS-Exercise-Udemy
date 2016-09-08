import React from 'react';

export default class Weather extends React.Component{

	constructor(props) {
		super(props);
	}

	render(){

		var panelStyle = {
			margin: '10px 7px 0 0px',
			width: 160,
			background: 'orange',
			textAlign: "center"
		}

		var panelHeadingStyle = {
			
			border: 'none',
			fontSize: '1.8em',
			padding: "18px 20px 0 15px",
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

};

