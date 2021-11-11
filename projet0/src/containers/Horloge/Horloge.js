import React from "react";
import { Component } from "react";
import classes from './Horloge.module.css'


class Horloge extends Component {

    // //Appel des props de la classe mère
    // constructor(props) {
    //     super(props)
    //     this.state = {date : new Date()};
    // }

    state = {
        date: new Date(),
        compteur: 1

    }

    tick = () => {
        this.setState((oldState, props) => {

            return {
                date: new Date(),
                compteur: oldState.compteur + 1
            }
                
        });
    }


    //Une fois que le composant a été affiché une première fois, ALORS ON FAIT : 
    componentDidMount(){
        this.timerID = setInterval( () => this.tick(), 1000);
        
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    render(){
    // Code JSX içi

        return(
            <>  
                <h2 className={classes.monTitre}>Horloge : {this.state.date.toLocaleTimeString()}</h2>
                <div>Compteur : {this.state.compteur}</div>
            </>
        );
    }


}






export default Horloge;