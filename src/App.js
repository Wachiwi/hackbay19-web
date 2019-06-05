import React from 'react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import OneColumnLayout from './components/OneColumnLayout'
import InfoView from './pages/info'
import ReportView from './pages/report'
import WelcomeView from './pages/welcome'
import SummaryView from './pages/summary'


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
