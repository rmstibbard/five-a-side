import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import AddPlayer from './components/AddPlayer';
import DisplayTeams from './components/DisplayTeams';

function App() {
  return (
    <React.Fragment>
      <Header />
      <AddPlayer />
      <DisplayTeams />
    </React.Fragment>
  );
}

export default App;
