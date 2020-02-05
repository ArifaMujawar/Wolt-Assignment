import React from 'react';

import './App.css';
import Restaurants from './restaurants'
import Header from './Header'


const App = () => {

  return (
    <div className="container">
      <Header />
      <hr></hr>
      <Restaurants />

    </div>

  );
}

export default App;
