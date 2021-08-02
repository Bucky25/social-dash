import React, { useState } from "react";
import "./globals.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import TopCardList from "./components/top-card-list";
import Overview from "./components/overview";
import Switcher from "./components/switch";
import Login from "./components/login/index";
import Post from "./components/post/index";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode";

  return (
    <main className={mainClass}>
      <>
      <Router>
        <Switch>
          <Route exact path= {'/'} >
            <Header>
              <Switcher darkMode={darkMode} setDarkMode={setDarkMode} />
            </Header>
            <TopCardList />
            <Overview />
            <Post />

          </Route>
          <Route  path='/login'>
            <Login />

          </Route>
          <Route  path='/post'>

          </Route>
        </Switch>
      </Router>
      </>
      
    </main>
  );
};
export default App;
