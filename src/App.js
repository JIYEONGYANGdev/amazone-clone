import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue();

  // useEffect <<<<< powerful
  //piece of code which runs based on a given condition

  useEffect(() => {
    // ! to listen to user signed in or signed out
    // function
    const unsubscribe = auth.onAuthStateChanged((authUser) => { // handy
      if (authUser) {
        // the user is logged in..
        // go to reducer..  'user: null'
        // ! reducer 에 'SET_USER' 추가 
        dispatch({
          type: 'SET_USER', //passing user
          user: authUser
        })
      } else {
        // the user is logged out..
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
    // ! clean this up by returning function
    return () => {
      // Any cleanup operations go in here... // ? 초기화 말하는 건가
      unsubscribe();
    }
    // login, logout => different component
  }, []) //dependencies
  // run once when app component reload 
  // [basket] 넣으면 and everytime basket even changes

  //+ if you use a return in useEffect -> the result of that will run when the component is unmounted

  console.log('USER IS >>>', user);

  // why we put here? => keep these highlevel
  // routing here => clean to maintain and figure out 
  return (
  // react router here
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/checkout'>
          <Header />
          <Checkout />
            {/* <h1>Checkout</h1> */}
          </Route>
          <Route path='/login'>
            {/* <h1>Login Page</h1> */}
            <Login />
          </Route>
          <Route exact path='/'>
            <Header />
            <Home />
          </Route>
      </Switch>
      </div>
  </Router>
  );
}

export default App;
