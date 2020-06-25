import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import AddPlayer from './components/AddPlayer'; // Has container file
// import ListPlayers from './components/ListPlayers';
// import CreateTeams from './components/CreateTeams';
import DisplayTeams from './components/DisplayTeams';
import Footer from './components/Footer/Footer';
import NumbersReached from './components/NumbersReached';

function App() {
  return (
    <React.Fragment>
      <Header />
      <AddPlayer />
      <NumbersReached />
      {/* <ListPlayers /> */}
      {/* <CreateTeams /> */}
      <DisplayTeams />
      <Footer>&copy; 2020 Richard Stibbard</Footer>
    </React.Fragment>
  );
}

export default App;
