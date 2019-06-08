import React, { Component } from 'react';
import './Pokecard.css'

function paddZeros(id){
    if ( id.length === 2 ){
        let str1 = '0'
        let str2 = id; 
        return str1.concat(str2);
    } else if (id.length === 1 ){
        let str1 = '00'
        let str2 = id; 
        return str1.concat(str2);
    } else {
        console.log(id.length);
        return id;
    }
}

class Pokecard extends Component {
    render() {
        let id = this.props.pokemon.id;
        let name = this.props.pokemon.name;
        let type = this.props.pokemon.type;
        let exp = this.props.pokemon.base_experience;
        let idWithZeros = paddZeros(id.toString());
        let url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idWithZeros}.png`;    
        // let url2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png` ;  
        // console.log(url) 
        return (
            <div className="Pokecard-pokecard">
                <h4>{name}</h4>
                <img src={url} />
                <p>Type: {type}</p>
                <p>EXP: {exp}</p>
            </div>
        )
    }
  }


export default Pokecard;