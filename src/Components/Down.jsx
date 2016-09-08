import React from 'react';
import DownCol from "./DownCol.jsx";

export default class Down extends React.Component {

	constructor(props) {
		super(props);
	}

	render(){

		var panelStyle = {
			margin: "5px 0",
			padding: 0
		}


		var panelHeadingStyle = {
			background: this.props.color,
			border: 'none',
			height:120,
			paddingLeft: 0,
			paddingRight: 20,
			paddingBottom: 0, 

		}

		var panelBodyStyle = {
			padding: "5px 20px 0 0",
			fontSize: '0.7em',
			background:'#94989E',
			color: 'white'
		}

		return (
			<div className="panel panel-default" style = {panelStyle}>
  				<div className="panel-heading " style = {panelHeadingStyle}>  </div>
  				<div className="panel-body" style={panelBodyStyle} >
	  				<div className = "row">
		  				<DownCol value = "15080" text = " Shot Views" />
		  				<DownCol value = "1200" text = "Likes" />
		  				<DownCol value = "5100" text = "Comments" />
	  				</div>
  				</div>
  				
			</div>
			)
	}

};
