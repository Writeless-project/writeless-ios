import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import AddNewJournal from '../screens/AddNewJournal';
import MainTabNavigator from './MainTabNavigator';

const AddNewJournalStack = createStackNavigator({
  AddJournal: { screen: AddNewJournal }
});

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  AddJournal: AddNewJournalStack
}, {
    initialRouteName: 'Main'
});