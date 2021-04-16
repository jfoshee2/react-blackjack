import React, { Component } from "react";
import Hand from "../Hand/Hand";
import GenericButton from "../Button/GenericButton";
import axios from "axios";


class Game extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            dealerCards: [],
            playerCards: [],
            playerDisabled: false,
            deckOfCards: [],
            deckId: null
        }
    }
    
    componentDidMount() {
        axios.get(process.env.URL + '/deck/new/shuffle/?deck_count=1').then(res => {
            if (res.status !== 200) {
                console.error('Error retrieving data');
            }
            this.setState({deckId: res.data.deck_id});
        }).catch(error => {
            console.error(error);
        });
    }

    addCard = () => {
        console.log('Hit Me being called');
        // TODO: do stuff here
    }
    
    handleDealerTurn = () => {
        
    }
    
    render() {
        return (
            <div>
                <Hand cards={this.state.dealerCards} />
                <GenericButton label="Hit Me" action={this.addCard} disabled={this.state.playerDisabled}/>
                <GenericButton label="Hold" action={this.handleDealerTurn} disabled={false} />
                <Hand cards={this.state.playerCards} />
            </div>
        );
    }
}

export default Game;
