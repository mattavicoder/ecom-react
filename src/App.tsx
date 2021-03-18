import React, { FunctionComponent } from 'react';
import {Route, Switch} from 'react-router-dom'
import HomePage from './page/homepage/homepage-component';

const usa = () => {
  return  <div>
    USA
  </div>
}

const london = () => <div> <h1>london</h1></div>

const india = () =>{
  return <div>HYD</div>
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/usa" component={usa} />
        <Route exact path="/london" component={london} />
        <Route exact path="/india" component={india} />
      </Switch>
    </div>
  );
}

export default App;
