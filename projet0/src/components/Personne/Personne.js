import React, {Component} from "react";
import AgePersonne from "./AgePersonne/AgePersonne";
import classes from './Personne.module.css';


class Personne extends Component {



    render(){
        const monStyle = {
            backgroundColor: "green",
            color:"white"
        };

        if(this.props.sexe){
            monStyle.backgroundColor = "yellow";
            monStyle.color = "black";

        }else{
            monStyle.backgroundColor = "blue";
        }

        return (
            <>
                <h1 className={classes.monTitre}>{this.props.nom}</h1>
                <AgePersonne age={this.props.age} />
                <div style={monStyle}>Sexe : {this.props.sexe ? "Homme" : "Femme"}</div>
                <button onClick={this.props.click}>Anniversaire</button>
            </>
        );
    }
    
}

export default Personne;
