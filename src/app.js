import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import Movies from './Movies';
import Confirmation from './Confirmation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { apiMiddleware, reducer } from './redux';

// Create Redux store
const store = createStore(reducer, {}, applyMiddleware(apiMiddleware));

// Fetch movie data
store.dispatch({type: 'GET_MOVIE_DATA'});

Navigation.registerComponent('Movies.Confirmation', () => Confirmation, store, Provider);
Navigation.registerComponent('Movies.Main', () => Movies, store, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'Movies.Main', // unique ID registered with Navigation.registerScreen 
    navigatorStyle: {
      navBarHidden: true
    }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
  passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
  animationType: 'slide-up'
});


