import './App.css';
import React, { Component } from 'react'
import Navber from './components/Navber';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <React.Fragment>
      <Router>
      <div>
        <div className="">
          <Navber title="NewsThirsty" />
        </div>

      <LoadingBar
      height={3}
      color='#f11946'
      progress={this.state.progress}
      />

      <Routes>
          <Route path="/" element={<News apiKey={this.apikey} setProgress={this.setProgress} key="general" title="Top Headlines" category="general" country="in" pageSize={this.pageSize} />} > </Route>
          <Route path="/general" element={<News apiKey={this.apikey} setProgress={this.setProgress} key="general1" title="Top Headlines" category="general" country="in" pageSize={this.pageSize} />} > </Route>
          <Route path="/sports" element={<News apiKey={this.apikey} setProgress={this.setProgress} key="sports" title="Top Headlines" category="sports" country="in" pageSize={this.pageSize} />} > </Route>
          <Route path="/business" element={<News apiKey={this.apikey} setProgress={this.setProgress} key="business" title="Top Headlines" category="business" country="in" pageSize={this.pageSize} />} > </Route>
          <Route path="/entertainment" element={<News apiKey={this.apikey} setProgress={this.setProgress} key="entertainment" title="Top Headlines" category="entertainment" country="in" pageSize={this.pageSize} />} > </Route>
          <Route path="/health" element={<News apiKey={this.apikey} setProgress={this.setProgress} key="health" title="Top Headlines" category="health" country="in" pageSize={this.pageSize} />} > </Route>
          <Route path="/technology" element={<News apiKey={this.apikey} setProgress={this.setProgress} key="technology" title="Top Headlines" category="technology" country="in" pageSize={this.pageSize} />} > </Route>
          <Route path="/science" element={<News apiKey={this.apikey} setProgress={this.setProgress} key="science" title="Top Headlines" category="science" country="in" pageSize={this.pageSize} />} > </Route>

        </Routes>

        </div>

      </Router>
      </React.Fragment>
    )
  }
}