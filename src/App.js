import './App.css';
import React, { Component } from 'react'
import Navber from './components/Navber';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize = 9;
  render() {
    return (
      <React.Fragment>
      <Router>
      <div>
        <div className="sticky-top">
          <Navber title="NewsThirsty" />
        </div>
        {/* <News title="Top Headlines" category="" country="" pageSize={this.pageSize} /> */}
      </div>

      <Routes>
          <Route path="/" element={<News key="general" title="Top Headlines" category="general" country="in" pageSize={this.pageSize} />} > </Route>
          <Route path="/general" element={<News key="general1" title="Top Headlines" category="general" country="in" pageSize={this.pageSize} />} > </Route>
          <Route path="/sports" element={<News key="sports" title="Top Headlines" category="sports" country="in" pageSize={this.pageSize} />} > </Route>
          <Route path="/business" element={<News key="business" title="Top Headlines" category="business" country="in" pageSize={this.pageSize} />} > </Route>
          <Route path="/entertainment" element={<News key="entertainment" title="Top Headlines" category="entertainment" country="in" pageSize={this.pageSize} />} > </Route>
          <Route path="/health" element={<News key="health" title="Top Headlines" category="health" country="in" pageSize={this.pageSize} />} > </Route>
          <Route path="/technology" element={<News key="technology" title="Top Headlines" category="technology" country="in" pageSize={this.pageSize} />} > </Route>
          <Route path="/science" element={<News key="science" title="Top Headlines" category="science" country="in" pageSize={this.pageSize} />} > </Route>

        </Routes>

      </Router>
      </React.Fragment>
    )
  }
}