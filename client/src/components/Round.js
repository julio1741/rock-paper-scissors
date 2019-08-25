import React from 'react';
import {connect} from 'react-redux';

class Round extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        player1: props.player1 ? props.player1 : 'fff',
        player2: "Player two",
        players: [],
        gameStarted:false
    };
  }

  render() {
    return (
	    <div className="single-round" >
	    	<div>
				<h1>Round 1</h1>
			</div>
			<h2>{this.state.player1}</h2>
	        <div className="input-item">
		        <select className="select"
		            value=""
		            >
		            <option value="date">Date</option>
		            <option value="amount">Amount</option>
		        </select>
		    </div>
	    </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});
export default connect(undefined, mapStateToProps)(Round);
