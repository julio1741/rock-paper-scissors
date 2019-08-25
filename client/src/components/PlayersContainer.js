import React, { Component } from 'react';
import Player from './Player';
import Round from './Round';
import axios from 'axios';
import { NavLink, Redirect, withRouter } from 'react-router-dom'
class PlayersContainer extends Component {
    constructor(props){
        super(props)
        this.handleStartGame = this.handleStartGame.bind(this);
        this.state = {
            player1: "Player one",
            player2: "Player two",
            players: []
        }
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
                    />
                </div>
                <div>
                    <label for="player2">Player 2:</label>
                    <input
                        type="text"
                        id="player2"
                        placeholder={this.state.player2}
                        className="text-input"
                    />
                </div>
                <div>
                    <NavLink to="/round"><div onClick={this.handleStartGame}>Start</div></NavLink>
                </div>                
                
                {this.state.players.map( player => {
                    return (<Player player={player} key={player.id} />)
                })}
            </div>
        )
    }
}
export default PlayersContainer;
//export default withRouter(PlayersContainer)