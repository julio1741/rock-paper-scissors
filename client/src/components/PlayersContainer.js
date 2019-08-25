import React, { Component } from 'react';
import {connect} from 'react-redux';
import Player from './Player';
import Round from './Round';
import axios from 'axios';
import { NavLink, Redirect, withRouter, Link } from 'react-router-dom'
class PlayersContainer extends Component {
    constructor(props){
        super(props)
        this.handleStartGame = this.handleStartGame.bind(this);
        this.onPlayerOneChange = this.onPlayerOneChange.bind(this);
        this.onPlayerTwoChange = this.onPlayerTwoChange.bind(this);
        this.state = {
            player1: "Player one",
            player2: "Player two",
            players: [],
            gameStarted:false
        }
    }
    onPlayerOneChange (e)  {
        const playerOne = e.target.value;
        this.setState(() => ({ player1: playerOne }));
    }

    onPlayerTwoChange (e)  {
        const playerTwo = e.target.value;
        this.setState(() => ({ player2: playerTwo }));
    }

    componentDidMount() {
        axios.get('/api/v1/players.json')
        .then(response => {
            console.log(response)
            this.setState({
                
                players: response.data
            })
        })
        .catch(error => console.log(error))
    }
    handleStartGame() {
        //alert("Create Users")
        //return <Redirect to = '/round' />
    }
    render() {
        return (
            <div className="players-container">
                <div>
                Enter players name:
                </div>
                <div>
                    <label for="player1">Player 1:</label>
                    <input
                        type="text"
                        id="player1"
                        placeholder={this.state.player1}
                        className="text-input"
                        onChange={this.onPlayerOneChange}
                    />
                </div>
                <div>
                    <label for="player2">Player 2:</label>
                    <input
                        type="text"
                        id="player2"
                        placeholder={this.state.player2}
                        className="text-input"
                        onChange={this.onPlayerTwoChange}
                    />
                </div>
                <div>
                    <Link
                      onClick={this.handleStartGame}
                      to={{
                        pathname: '/round'
                      }}
                    >
                    Start
                    </Link>
                </div>                
                
                {this.state.players.map( player => {
                    return (<Player player={player} key={player.id} />)
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state
    };
}

export default connect(mapStateToProps)(PlayersContainer);