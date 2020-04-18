import React from 'react';

import './App.css';
import Homepage from './containers/Homepage/Homepage';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Homepage />
      </Layout>
    </div>
  );
}

export default App;
