import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar.js';
import News from './components/News.js';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <div>
          <Router>
            <Navbar />
            <News />
            <Routes>
              <Route exact path="/nr" element={News} />
              <Route exact path="/ur" element={News} />
            </Routes>
          </Router>
        </div>
      </>
    )
  }
}
