import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';


class Pokedex extends Component{
    
    render() {
        return (
          <div className="Pokedex-content">
              <div className="Pokedex-result-row">
                <p style={{ backgroundColor: this.props.isWinner ? "yellowgreen" : "tomato" }} className="Pokedex-result-text ">{ this.props.isWinner ? 'You win!' : 'You lose!' } </p> 
            
                <p className="Pokedex-result-exp">Total experience level {this.props.totalExp} </p>
              </div>
              <div className="Pokedex-poke-row">
                {this.props.pokemons.map(poke => <Pokecard key={poke.id} pokemon={poke} />)} 
              </div>
          </div>
        )
    }
}

export default Pokedex;