import React from 'react';
import './App.css';
import Header from './components/Header/Header'; // Must use directory and filename minus extension if there is no container 'index.js' associated with the component. If there is a container file, use the directory name alone */
import AddPlayer from './components/AddPlayer/AddPlayer';
import CreateTeams from './components/CreateTeams/CreateTeams';
import DisplayTeams from './components/DisplayTeams/DisplayTeams';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <AddPlayer />
      <CreateTeams />
      <DisplayTeams />
      <Footer />
    </React.Fragment>
  );
}

export default App;
