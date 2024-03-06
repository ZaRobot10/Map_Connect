import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import SearchBox from "./SearchBox";
import Maps from "./Maps";
import Login from "./login";
import Desktop from "./Desktop";
import SignUpPage from "./signup";

function App() {
  const [selectPosition, setSelectPosition] = useState(null);
  return ( 
  <Router>
    <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    
    <Route exact path="/map">
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      width: "100vw",
      height: "100vh",
    }}
  >
    <div style={{ width: "50vw", height: "100%" }}>
      <Maps selectPosition={selectPosition} />
    </div>
    <div style={{ width: "50vw" }}>
      <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
    </div>
  </div>
</Route>
<Route exact path="/login">
  <Login />
  
    </Route>

    <Route exact path="/signUp">
      <SignUpPage />
  
    </Route>
    </Switch>
  
  </Router>
  );
}

export default App;
