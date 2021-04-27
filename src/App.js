import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {useState} from 'react';

import './css/common.css';
import Header from './Header';
import Copy from './Copy';
import Main from './Main';
import Menu from './Menu';
import Footer from './Footer';
import About from './About';
import Work from './Work';

import common from './function/common';
// import about from './function/about';
// import work from './function/work';


function App() {
  return (
    <BrowserRouter>
      <Header />
          <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/about/"  component={About} />
              <Route path="/work/"  component={Work} />
          </Switch>
      <Footer />
    </BrowserRouter>
  );
}

common();

export default App;
