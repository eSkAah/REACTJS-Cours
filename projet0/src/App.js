import React, {Component} from "react";
import Personne from "./components/Personne/Personne";
import Horloge from "./containers/Horloge/Horloge";
import './App.css';


class App extends Component{


    state = {
        personne : [
            {nom:"Allan", age:"31", sexe:true},
            {nom:"Marie", age:"28", sexe:false},
            {nom:"Mickael", age:"24", sexe:true}
        ]

    }


    render(){
        return (
            <>
                <Horloge />
                <Personne {...this.state.personne[0]} />
                <Personne {...this.state.personne[1]} />
                <Personne {...this.state.personne[2]} />
            </> 
        )
    }
}



export default App;