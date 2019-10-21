import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import About from './components/About';
import Resume from './components/Resume';
import Quotes from './components/Quotes';

const styles = {
  background: '#000',
  width: '2px',
  cursor: 'col-resize',
  margin: '0 5px',
  height: '100%',
};

const App = () => (
  <Router>
    <SplitPane
      split="vertical"
      minSize={200}
      defaultSize={200}
      resizerStyle={styles}
    >
      <menu>
        <div><Link to="/">About</Link></div>
        <div><Link to="/resume">Resume</Link></div>
        <div><Link to="/quotes">Favorite Quotes</Link></div>
      </menu>
      <div>
        <Route exact path="/" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/quotes" component={Quotes} />
      </div>
    </SplitPane>
  </Router>
);


export default App;
