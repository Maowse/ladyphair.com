import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import About from './components/About';
import Resume from './components/Resume';
import Quotes from './components/Quotes';
import './App.css';

const splitPaneBarStyle = {
  background: '#2e3532',
  width: '2px',
  height: '100%'
};

const pane1Style = {
  background: '#2e3532'
};

const pane2Style = {
  'padding-left': '5px'
};


const App = () => (
  <Router>
    <SplitPane
      split="vertical"
      size={200}
      allowResize={false}
      resizerStyle={splitPaneBarStyle}
      pane1Style={pane1Style}
      pane2Style={pane2Style}
    >
      <div>
        <img class="profile-img" src="./avatar2.png" alt="Amber Phair"></img>
        <h2 class="main-name">Amber Phair</h2>
        <menu class="sidebar-menu">
          <div class="sidebar-menu-link"><Link to="/">About</Link></div>
          <div class="sidebar-menu-link"><Link to="/resume">Resume</Link></div>
          <div class="sidebar-menu-link"><Link to="/quotes">Favorite Quotes</Link></div>
        </menu>
      </div>
      
      <div>
        <Route exact path="/" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/quotes" component={Quotes} />
      </div>
    </SplitPane>
  </Router>
);


export default App;
