import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//pages
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
