import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header'
import Title from './components/Title';
import BodySection from './components/Body/BodySection'
import Footer from './components/Layout/Footer'


function App() {
  return (
    <div className="App">
      <Header/>
      <Title/>
      <BodySection/>
      <Footer/>
    </div>
  );
}

export default App;
