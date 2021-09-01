import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//pages
import Home from './Pages/Home/Home';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
