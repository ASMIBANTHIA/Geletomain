import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/features" element={<Features />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/call-to-action" element={<CallToAction />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
