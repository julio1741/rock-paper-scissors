import React from 'react';

class WinPage extends React.Component {
  	constructor(props) {
	    super(props);   
	    this.state = {
	        winner: this.props.location.state.winner ? this.props.location.state.winner : 'Payer One',

	    };
	}
  	render() {
	    return (
			<div className="single-player" >
		        <h1>WE HAVE A WINNER!</h1>
		        <p>{this.state.winner} is the new EMPEROR!</p>
		    </div>
	    )
	}
}
export default WinPage;