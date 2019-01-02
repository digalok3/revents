import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import {Route, Switch} from 'react-router-dom'
import EventDashBoard  from '../../features/event/EventDashBoard/EventDashBoard.jsx';
import NavBar from '../../features/Nav/NavBar/NavBar'
import EventForm from '../../features/event/EventForm/EventForm'
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage.jsx';
import PeopleDashBoard from '../../features/user/PeopleDashBoard/PeopleDashBoard'
import UserDetailed from '../../features/user/UserDetailed/UserDetailed.jsx';
import SettingsDashBoard from '../../features/user/Settings/SettingsDashBoard.jsx';
import HomePage from '../../features/home/HomePage'


class App extends Component {
  render() {
    return (
      <div>
      <Switch >
            <Route exact path='/' component={HomePage}/>      
        </Switch>
        <Route path='/(.+)'
        render = {()=> (
          <div > 
          <NavBar/>
          <Container className="main">
          <Switch >
              <Route path='/events' component={EventDashBoard}/>       
              <Route path='/event/:id' component={EventDetailedPage}/>       
              <Route path='/people' component={PeopleDashBoard}/>       
              <Route path='/profile/:id' component={UserDetailed}/>       
              <Route path='/settings' component={SettingsDashBoard}/>       
              <Route path='/createEvent' component={EventForm}/>       
          </Switch>
          </Container>       
        </div>
        )}/>
      </div>
    );
  }
}

export default App;

