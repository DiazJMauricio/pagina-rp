import React, { Component } from 'react';
import './App.css';
import Page from './components/Page';

// import {HashRouter, Route, Link, Switch } from "react-router-dom";
import { HashRouter } from 'react-router-dom'

// class App extends Component {
//   render() {
//     return (
//       <div className="App" >
//         <Page />
//       </div>
//     );
//   }
// }

// export default App;

export default () => (
    <HashRouter>
        <Page/>
    </HashRouter>
);
