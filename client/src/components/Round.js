import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Round extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        player1: props.player1 ? props.player1 : 'fff',
        player2: "Player two",
        players: [],
        gameStarted:false,
        moves: []
    };
  }

    componentDidMount() {
        axios.get('/api/v1/moves')
        .then(response => {
            console.log(response)
            this.setState({
              
                moves: response.data.moves
            })
        })
        .catch(error => console.log(error))
    }

  render() {
    return (
	    <div className="single-round" >
	    	<div>
				<h1>Round 1</h1>
			</div>
			<h2>{this.state.player1}</h2>
	        <div className="input-item">
		        <select className="select" >

               {this.state.moves.map( move => {
                    return (<option key={move} value="{move}">{move}</option>)
                })}

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
