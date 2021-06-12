import { Switch, Route } from "react-router-dom";
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={ SignUp }/>
      <Route path="/login" exact component={ Login }/>
    </Switch>
  );
}

export default App;
