import { Switch, Route } from "react-router-dom";
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <Switch>
      <Route path="/" component={ SignUp }/>
    </Switch>
  );
}

export default App;
