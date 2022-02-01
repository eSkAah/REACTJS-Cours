import React, { Component } from 'react';
import Button from "./components/BoutonAjouter/Button";
import TitreH1 from './components/Titres/TitreH1';


class App extends Component{

  render(){

    return (
        <>
            <div className="container">

                <TitreH1>MA BIBLIOTHEQUE</TitreH1>

                <div className="d-flex">

                </div>
                <Button typeBtn="btn-success" clic={() => console.log('Add World')}>Ajouter</Button>
                <Button typeBtn="btn-warning" clic={() => console.log('Modify World')}>Modifier</Button>
                <Button typeBtn="btn-danger" clic={() => console.log('Delete World')}>Supprimer</Button>

            </div>
        </>

    )
  }

}

export default App;
