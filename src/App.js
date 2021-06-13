import { Switch, Route } from "react-router-dom";
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import PersonalInfo from './pages/Sheets/PersonalInfo';
import ProfileImageSheet from './pages/Sheets/ProfileImageSheet';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={ SignUp }/>
      <Route path="/login" exact component={ Login }/>
      <Route path="/step1" exact component={ PersonalInfo }/>
      <Route path="/step2" exact component={ ProfileImageSheet }/>
    </Switch>
  );
}

export default App;
