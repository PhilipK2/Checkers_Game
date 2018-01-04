import React, { Component } from 'react';
import {Button, Icon, Modal, SideNavItem, SideNav} from 'react-materialize';
import LogIn from "./components/LogIn";
import Home from "./components/Home";
import GamePage from "./components/GamePage";
import { Router, Route, Switch, Redirect } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
      <Home/>
      {/* <GamePage/> */}
			{/* <LogIn/> */}
      </div>
    );
  }
}

// const App = () => (
//   <div className="primary-layout">
//     <main>
// 			<Router>
//       <Switch>
//         <Route path="/" exact component={LogIn} />
//         <Route path="/home" component={Home} />
//         <Redirect to="/" />
//       </Switch>
// 			</Router>
//     </main>
//   </div>
// )

export default App;
