import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/router/scroll-to-top';
import './styles/index.css';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Pricing from './pages/pricing';

class App extends Component {

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/pricing' element={<Pricing />} />
          </Routes>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
