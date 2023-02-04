import './App.css';
import React, { Component } from 'react'
import Navber from './components/Navber';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="sticky-top">
          <Navber title="NewsThirsty" />
        </div>
        <News title="Top Headlines" />
      </div>
    )
  }
}