import React from 'react';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './containers/Homepage/Homepage';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Layout>
            <Homepage />
          </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
