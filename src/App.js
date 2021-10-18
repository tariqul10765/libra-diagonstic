import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home/Home';
import Login from './pages/login/login/Login';
import Header from './pages/shared/header/Header';
import Footer from './pages/shared/footer/Footer';
import SignUp from './pages/registration/sign-up/SignUp';
import NotFound from './pages/not-found/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <SignUp></SignUp>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
