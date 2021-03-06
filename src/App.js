import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import MainView from "./views/MainView";
import PlaceCategoryView from "./views/PlaceCategoryView";
import EventCategoryView from "./views/EventCategoryView";
import ActivityCategoryView from "./views/ActivityCategoryView";
import ActivitiesView from "./views/ActivitiesView";
import PlacesView from "./views/PlacesView";
import EventsView from "./views/EventsView";
import SingleActivityView from "./views/SingleActivityView";
import SinglePlaceView from "./views/SinglePlaceView";
import SingleEventView from "./views/SingleEventView";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="mainPage" component={MainView} initial={true} />
          <Scene key="placeCategoryView" component={PlaceCategoryView} />
          <Scene key="eventCategoryView" component={EventCategoryView} />
          <Scene key="activityCategoryView" component={ActivityCategoryView} />
          <Scene key="ActivitiesView" component={ActivitiesView} />
          <Scene key="PlacesView" component={PlacesView} />
          <Scene key="EventsView" component={EventsView} />
          <Scene key="SingleActivityView" component={SingleActivityView} />
          <Scene key="SinglePlaceView" component={SinglePlaceView} />
          <Scene key="SingleEventView" component={SingleEventView} />
        </Scene>
      </Router>
    )
  }
}