import React, {Component} from "react";
import Personne from "./components/Personne/Personne";
import Horloge from "./containers/Horloge/Horloge";
import Compteur from "./containers/Compteur/Compteur";
import './App.css';


class App extends Component{

    state = {
        
        personne : [
            {nom:"Allan", age:"31", sexe:true},
            {nom:"Marie", age:"28", sexe:false},
            {nom:"Mickael", age:"24", sexe:true}
        ]

    }

    anniversaireHandler = (numPersonne) =>{
        const newPersonne = {...this.state.personne[numPersonne]}; // On peut utiliser un spread opérator ""...""
        
        newPersonne.age++;
        
        const newTab = this.state.personne;
        newTab[numPersonne] = newPersonne;

        this.setState({newTab: newPersonne});
        
    }

    render(){
        return (
            <>
                <button onClick={this.anniversaireHandler} >Click me!</button>
                <Horloge />
                <Compteur />
                <Personne {...this.state.personne[0]} click={() => this.anniversaireHandler(0)} />
                <Personne {...this.state.personne[1]} click={() => this.anniversaireHandler(1)} />
                <Personne {...this.state.personne[2]} click={() => this.anniversaireHandler(2)} />
            </> 
        )
    }
}



export default App;