import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Round extends React.Component {
  constructor(props) {
    super(props);
    this.turnPlayer = this.turnPlayer.bind(this);
    this.onPlayerOneChange = this.onPlayerOneChange.bind(this);
    this.onPlayerTwoChange = this.onPlayerTwoChange.bind(this);    
    this.state = {
        player1: this.props.location.state.player1 ? this.props.location.state.player1 : 'Payer One',
        player2: this.props.location.state.player2 ? this.props.location.state.player2 : 'Payer Two',
        gameStarted:false,
        turn: 1,
        round: 1,
        turn1: true,
        turn2: false,
        move1:'rock',
        move2:'paper',
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

  turnPlayer() {
    this.setState({turn1: !this.state.turn1});
    this.setState({turn2: !this.state.turn2});
    this.setState({turn: this.state.turn + 1});
    if (this.state.turn > 1 && this.state.turn % 2 == 0){
      this.setState({round: this.state.round + 1});

      const profile = {
        "player1":this.state.player1,
        "player2":this.state.player2,
        "move1":this.state.move1,
        "move2":this.state.move2
      };
      axios.post('/api/v1/winner', profile)
        .then(response => {
          const winner = response.data.winner
          console.log(winner)
          if ( response.data.winner == "no_winner" ) {
            alert("no winner in this round!")
          } else {
            alert("the winner in this round is " + winner + "!")
          }
          console.log(response)
        });
      }
  }

    onPlayerOneChange (e)  {
      console.log(e.target.value)
        this.setState({ move1: e.target.value });
        console.log(this.state.move1)
    }

    onPlayerTwoChange (e)  {
        this.setState({ move2: e.target.value });
    }


  render() {
    return (
      <div className="single-round" >
        {this.state.turn1 &&
        <div>
          <div>
          <h1>Round {this.state.round}</h1>
        </div>
        <h2>{this.state.player1}</h2>
            <div className="input-item">
              <label for="selectPlayer1">Select Move:</label>
              <select id = "selectPlayer1" className="select" onChange={this.onPlayerOneChange} >

                 {this.state.moves.map( move => {
                      return (<option key={move} value={move}>{move}</option>)
                  })}

              </select>
          </div>
        </div>
      }

        {this.state.turn2 &&
        <div>
          <div>
          <h1>Round {this.state.round}</h1>
        </div>
        <h2>{this.state.player2}</h2>
            <div className="input-item">
              <label for="selectPlayer2">Select Move:</label>
              <select id = "selectPlayer2" className="select" onChange={this.onPlayerTwoChange}>

                 {this.state.moves.map( move => {
                      return (<option key={move} value={move}>{move}</option>)
                  })}

              </select>
          </div>
        </div>
      }

        <button onClick={this.turnPlayer}>
        OK
      </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});
export default connect(undefined, mapStateToProps)(Round);
