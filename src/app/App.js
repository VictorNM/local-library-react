import React from 'react';

import Header from './layout/header';
import Sidebar from './layout/sidebar';
import Main from './layout/main';

const App = () => (
  <div>
    <Header />
      <div className="container-fluid">
        <Sidebar />
        <Main />
      </div>
  </div>
);

export default App;