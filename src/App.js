import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'; 
import Contact from './components/ContactPage/Contact';
import Random  from './components/Random/RandomMeal';
import About from './components/About/About';
import HomePage from './components/HomePage/HomePage';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/random" component={Random}/>
        <Route exact path="/contact" component={Contact}/>
    </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
