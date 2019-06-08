import React, {Component} from 'react';
import Pokedex from './Pokedex';

let hand1 = [];
let hand2 = [];
let hand1TotalExp = 0;
let hand2TotalExp = 0;
let hand1IsWinner = false;
let hand2IsWinner = false;

// start Pokedex game
function startGame(allPokemons){
    console.log("*****  Game started!!  ******");
    drawPokemons(allPokemons);
    console.log('hand1', hand1);
    console.log('hand2', hand2);
    hand1TotalExp = calculateTotalExp(hand1);
    hand2TotalExp = calculateTotalExp(hand2);
    selectWinner(hand1TotalExp, hand2TotalExp);
    console.log("*****  Game done!!  ******");
}

// draw Pokemons
function drawPokemons(pokemons){
    let hand1Nb = 4;
    for(let i=0; i < 8; i++ ){
        let newIndex = Math.floor(Math.random() * pokemons.length);
        //console.log("calc", hand1Nb)
        if (hand1Nb <= 0){
            hand2.push(pokemons[newIndex]);
            pokemons.splice(newIndex, 1);
           
        } else{
            hand1.push(pokemons[newIndex]);
            pokemons.splice(newIndex, 1);
        }
        hand1Nb = hand1Nb - 1;
    }  
}

// calculate total experience of  Pokemons
function calculateTotalExp(pokemonsList){
    let totalExp = 0;
    for(let i=0; i < 4; i++ ){
        console.log(pokemonsList[i].base_experience);
        totalExp += pokemonsList[i].base_experience;
        //console.log(totalExp);
    } 
    return totalExp;
}

// select winner
function selectWinner(exp1, exp2){
    if( exp1 > exp2 ){
        hand1IsWinner = true;
        hand2IsWinner = false;
    } else if ( exp1 < exp2 ){
        hand1IsWinner = false;
        hand2IsWinner = true;
    } else {
        hand1IsWinner = true;
        hand2IsWinner = true;
    } 
    console.log('hand1 ', hand1IsWinner,' hand2: ', hand2IsWinner);    
}


class Pokegame extends Component{
    render(){
        startGame(this.props.pokemons);
        return(
            <div>
                <h1>Pokedex</h1>
                <Pokedex pokemons={hand1} totalExp={hand1TotalExp} isWinner={hand1IsWinner}/>
                <Pokedex pokemons={hand2} totalExp={hand2TotalExp} isWinner={hand2IsWinner}/>
            </div>

        )
    }


}

export default Pokegame