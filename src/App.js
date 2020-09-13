import React from "react";
import Layout from './layouts/DefaultLayout';
import "./assets/all.scss";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Movie from "./pages/movie"

import Main from './pages/main'; 

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/movie/:id' component={Movie} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
};

export default App;
