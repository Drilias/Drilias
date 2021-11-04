import React from "react";
import Home from "../pages/Home/Home";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const RouteManager = () => {
  return (
    <BrowserRouter>
       <Switch>
          <Route exact path="/" component={Home} />          
          <Route path="/movie/:id" component={MovieDetails} />          
       </Switch>
    </BrowserRouter>
  )
}

export default RouteManager;
