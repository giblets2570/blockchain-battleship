// Import the page's CSS. Webpack will know what to do with it.
import "../stylesheets/app.css";

// Angular dependencies
import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
// Load config
// import './app.scss';
import {
  appInit,
  routing
} from './app.config';

// Utilities
import './utilities.js';

// Load services
import Battleship from './services/battleship.service';

// Load Views
import { homeComponent, homeState } from './views/home';

export default angular.module('app', [
    angularUiRouter
  ])

  .run(appInit)
  .config(routing)

  .config(homeState).component('home',homeComponent)

  .service('Battleship',Battleship);