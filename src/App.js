import React from 'react';
import './App.css';
import Header from './components/Header/Header'; // Must use directory and filename minus extension if there is no container 'index.js' associated with the component. If there is a container file, use the directory name alone */
import AddPlayer from './components/AddPlayer'; // Has container file
// import ListPlayers from './components/ListPlayers';
// import CreateTeams from './components/CreateTeams';
import DisplayTeams from './components/DisplayTeams';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <AddPlayer />
      {/* <ListPlayers /> */}
      {/* <CreateTeams /> */}
      <DisplayTeams />
      <Footer />
    </React.Fragment>
  );
}

export default App;
