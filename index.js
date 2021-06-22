import React from 'react';
// react router, you need these all
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages,atually these are all components but they become our pages here
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';

// navbar
import Navbar from './Navbar';


const ReactRouterSetup = () => {
  // here put all pages inside the Router
  return <Router>

    <Navbar />

    {/* with using switch only the first path which matches the pages is seen  */}
  <Switch>

    {/*the way we set them to be like pages is like that   */}
    <Route exact path='/'>  {/* this '/' means it takes us to the home page */}
    <Home/>
    </Route>

    <Route path='/about'> {/*  this url for about page*/}
    <About/>
    </Route>

    <Route path='/people'>
    <People/>
    </Route>


     <Route path='/person/:id' childern={<Person />}></Route>

    {/*  url which doent exist */}
    <Route path="*">
    <Error />
    </Route>

  </Switch>
  </Router>;
};
// {/* <h2>react router</h2> */}
export default ReactRouterSetup;
