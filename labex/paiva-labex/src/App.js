import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage';
import ListTripsPage from './pages/ListTripsPage';
import ApplicationFormPage from './pages/ApplicationFormPage';
import CreateTripPage from './pages/CreateTripPage';
import TripDetailsPage from './pages/TripDetailsPage';
import AdminHomePage from './pages/AdminHomePage';
import LoginPage from './pages/LoginPage';
import styled from "styled-components";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


const AppContainer = styled.div`
   display:flex;
   flex-direction:column;  
   padding:30px;
   background-image:url(/images/space.jpg);
   height:100vh;
   color:white;
`

const App = () => {
  return (
    <Router>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <AppContainer>
          <Switch>
            <Route exact path="/viagens/criar">
              <CreateTripPage />
            </Route>
            <Route exact path="/viagens/detalhes/:tripId">
              <TripDetailsPage />
            </Route>
            <Route exact path="/admin">
              <AdminHomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/inscricao">
              <ApplicationFormPage />
            </Route>
            <Route exact path="/viagens/lista">
              <ListTripsPage />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </AppContainer>
      </MuiPickersUtilsProvider>
    </Router>
  )
}

export default App;
