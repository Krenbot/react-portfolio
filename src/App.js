import React, { useState } from 'react';
import Aboutme from './pages/Aboutme';
import Contactme from './pages/Contactme';
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {
  const [page, setPage] = useState('home')
  const render = () => {
    if (page === 'home') {
      return <Aboutme />;
    } else if (page === 'contact') {
      return <Contactme />
    } else {
      return <Portfolio />
    }
  }
  return (
    <div className="App">
      <Header />

      <Navbar page={page} setPage={setPage} />

      {
        render()
      }


      <Footer />
    </div>
  );
}

export default App;
