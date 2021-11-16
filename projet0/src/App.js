import React, {Component} from "react";
import Personne from "./components/Personne/Personne";
import Horloge from "./containers/Horloge/Horloge";

import AgePersonne from "./components/Personne/AgePersonne/AgePersonne";
import './App.css';


class App extends Component{

    state = {
        
        personne : [
            {id:1, nom:"Allan", age:"31", sexe:true},
            {id:3, nom:"Marie", age:"28", sexe:false},
            {id:8, nom:"Mickael", age:"24", sexe:true},
            {id:10, nom:"Jean", age:"45", sexe:true}
        ]

    }

    anniversaireHandler = (numPersonne) =>{
        // Génération d'une copie de la personne sur laquelle on veut effectuer une action
        const newPersonne = {...this.state.personne[numPersonne]}; // On peut utiliser un spread opérator ""...""
        
        newPersonne.age++;// Augmente l'age de la personne selectionnée
        
        const newTab = this.state.personne;//On duplique le tableau de personnes
        newTab[numPersonne] = newPersonne;//On remplace la personne a l'indice du tableau par la nouvelle personne

        this.setState({newTab: newPersonne});// On remplace dans le state le tableau de personnes par le nouveau tableau
        
    }

    render(){
        return (
            <>
                <button onClick={this.anniversaireHandler} >Click me!</button>
                
                <Horloge />
                {this.state.personne.map((personnage, index) => {
                    return (
                        <Personne key= {index} {...personnage} click={() => this.anniversaireHandler(index)}>
                            <AgePersonne age={personnage.age} /> 
                        </Personne>
                    )
                })}


            </> 
        )
    }
}



export default App;