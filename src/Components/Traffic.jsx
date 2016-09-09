import React from 'react';


export default class Traffic extends React.Component {
	constructor(props) {
		super(props);
	};
	

	render() {

		var panelStyle = {
			margin: '20px 7px 0 0px',
			minWidth: 160,
			padding: 0
		}

		var panelHeadingStyle = {
			background: this.props.color,
			border: 'none',
			height: 50,
			padding: 0,
			color: 'white'
		}

		var panelBodyStyle = {
			padding: "5px 20px 0 0",
			background:'white',
			height:40
		}

		var titleStyle = {
			margin: 0,
			padding: '5px 0 0 10px',
			fontSize: '0.8em'
		}

		var valueStyle = {
			margin: 0,
			padding: '0 0 10px 10px',
			fontSize: '1.3em',
			fontWeight:'bold',
		}


		return (
			<div className = "col-xs-12"> 
				<div className="panel panel-default " style = {panelStyle}>
		  			<div className="panel-heading " style = {panelHeadingStyle}> 
		  				<p style = {titleStyle}> {this.props.title} </p>
		  				<p style = {valueStyle}> {this.props.value} </p>
		  			</div>
		  			<div className="panel-body" style={panelBodyStyle} > </div>
				</div>
			</div>
		)
	}
};


