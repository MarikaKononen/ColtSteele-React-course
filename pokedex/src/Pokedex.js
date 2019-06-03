import React, {Component} from 'react';
import Pokecard from './Pokecard'
import './Pokedex.css'

class Pokedex extends Component{
    render() {
       
        return (
          <div className="Pokedex-content">
              <h1>Pokedex</h1>
              <div className="Pokedex-row">
                <Pokecard pokemon={this.props.pokemons[0]} />
                <Pokecard pokemon={this.props.pokemons[1]} /> 
                <Pokecard pokemon={this.props.pokemons[2]} /> 
                <Pokecard pokemon={this.props.pokemons[3]} /> 
              </div>
              <div className="Pokedex-row">
                <Pokecard pokemon={this.props.pokemons[4]} /> 
                <Pokecard pokemon={this.props.pokemons[5]} />
                <Pokecard pokemon={this.props.pokemons[6]} /> 
                <Pokecard pokemon={this.props.pokemons[7]} /> 
              </div>  
          </div>
        )
    }
}

export default Pokedex;