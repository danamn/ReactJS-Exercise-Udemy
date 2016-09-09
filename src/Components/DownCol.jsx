import React from 'react';

export default class DownCol extends React.Component {

	constructor(props) {
		super(props);
	}

	render(){
		var topRowStyle = {
			textAlign: 'center',
			fontSize: '1.6em',
			fontWeight: 'bold',
			letterSpacing: '1px',
			marginBottom: 0
		}

		var bottomRowStyle = {
			textAlign: 'center',
			fontSize: '1em'
		}

		return (
			<div className = "col-sm-4 col-xs-4"> 
				<p style = {topRowStyle}> {this.props.value} </p>
				<p style= {bottomRowStyle}> {this.props.text} </p>
			</div>

		)


	}

};
