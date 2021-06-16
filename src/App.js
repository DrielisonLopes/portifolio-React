import './App.css';
import React from "react";

import Header from './components/header/Header';
import About from './components/about/About';
import Projetos from './components/projects/Projetos';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <About />
      </header>
        <Projetos />
        <Footer />
    </div>
  );
}

export default App;
