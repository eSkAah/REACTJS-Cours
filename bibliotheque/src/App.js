import React, { Component } from 'react';
import BoutonAjouter from './components/BoutonAjouter/BoutonAjouter';
import TitreH1 from './components/Titres/TitreH1';
import Livres from './components/Livres/Livres';

class App extends Component{

  render(){

    return (
      <div className="container">

        <TitreH1>MA BIBLIOTHEQUE</TitreH1>
        <Livres />
        <BoutonAjouter />

      </div>
    )
  }

}

export default App;
