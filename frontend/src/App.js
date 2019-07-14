import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Static/Header';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Static/Footer';

function App() {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <div className="App">
        <Header/>
        <div className="container">
          <Route exact path ="/" component={Home}></Route>
          <Route exact path ="/home" component={Home}></Route>
          <Route exact path ="/introduction" component={Introduction}></Route>
          <Route exact path ="/projects" component={Projects}></Route>
          <Route exact path ="/contact" component={Contact}></Route>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
