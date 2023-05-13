import './App.css';
import React, { useState } from 'react'
import Navber from './components/Navber';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App =()=> {
  const pageSize = 9;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)
    return (
      <React.Fragment>
      <Router>
      <div>
          <Navber title="TazaKharbar" />

      <LoadingBar
      height={2}
      color='#f11946'
      progress={progress}
      />

      <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="general" category="general" country="in" pageSize={pageSize} />} > </Route>

          <Route path="/general" element={<News apiKey={apiKey} setProgress={setProgress} key="general1" category="general" country="in" pageSize={pageSize} />} > </Route>

          <Route path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" category="sports" country="in" pageSize={pageSize} />} > </Route>
          
          <Route path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" category="business" country="in" pageSize={pageSize} />} > </Route>
          
          <Route path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" category="entertainment" country="in" pageSize={pageSize} />} > </Route>
          
          <Route path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key="health" category="health" country="in" pageSize={pageSize} />} > </Route>
          
          <Route path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" category="technology" country="in" pageSize={pageSize} />} > </Route>
          
          <Route path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" category="science" country="in" pageSize={pageSize} />} > </Route>
          

        </Routes>

        </div>

      </Router>
      </React.Fragment>
    )

}

export default App;