import React, { Component } from 'react';
import Player from './Player';
import Round from './Round';
import axios from 'axios';
import { NavLink } from 'react-router-dom'
class PlayersContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
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
                        placeholder="Player 1"
                        className="text-input"
                    />
                </div>
                <div>
                    <label for="player2">Player 2:</label>
                    <input
                        type="text"
                        id="player2"
                        placeholder="Player 2"
                        className="text-input"
                    />
                </div>
                <div>
                    <NavLink to="/round"> Start </NavLink>
                </div>                
                
                {this.state.players.map( player => {
                    return (<Player player={player} key={player.id} />)
                })}
            </div>
        )
    }
}
export default PlayersContainer;