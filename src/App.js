import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import 'semantic-ui-css/semantic.min.css';
import './App.scss';

import OneColumnLayout from './components/OneColumnLayout'
import InfoView from './pages/info'
import ReportView from './pages/report'
import WelcomeView from './pages/welcome'
import SummaryView from './pages/summary'



/*
Color:
Text: #313131
Primary: #4550E6
Secondary: #248FA7
Sec-light: #69C3CE
Accent: #FBFCEE
 */


function App() {
  return (
    <OneColumnLayout>
      <Router>
        <Route exact path="/report" component={ReportView}/>
        <Route exact path="/summary" component={SummaryView}/>
        <Route exact path="/info" component={InfoView}/>
        <Route exact path="/" component={WelcomeView}/>
      </Router>
    </OneColumnLayout>
  );
}

export default App;
