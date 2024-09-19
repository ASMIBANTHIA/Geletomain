import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Hero from './components/Hero';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'
import Bar from './components/Bar';
import InfoSection from './components/InfoSection';
import Accelerate from './components/Accelerate';
import ElevateGeleto from './components/ElevateGeleto';
import MeetGeleto from './components/MeetGeleto';
import FixedButton from './components/FixedButton';


function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Bar/>
        <InfoSection />
        <Accelerate />
        <ElevateGeleto />
        <MeetGeleto />
        <FixedButton/>
<Footer/>
    </div>
  );
}

export default App;
