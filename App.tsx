import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Forensics from './pages/Forensics';
import Translator from './pages/Translator';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forensics" element={<Forensics />} />
          <Route path="/translator" element={<Translator />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;