import React, { useState } from 'react';
import Aboutme from './pages/Aboutme';
import Contactme from './pages/Contactme';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
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
    } else if (page === 'resume') {
      return <Resume />
    } else {
      return <Portfolio />
    }
  }

  return (
    <div className="App">
      <Header page={page} setPage={setPage} />
      {render()}
      <Footer />
    </div>
  );
}

export default App;