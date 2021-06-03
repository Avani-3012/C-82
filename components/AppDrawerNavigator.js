import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
//import ItemRequestScreen from '../Screens/ItemRequestScreen'
//import ItemDonateScreen from '../Screens/ItemDonateScreen'
import SettingScreen from '../Screens/SettingScreen';
import MyDonations from '../Screens/MyDonations'
import MyReceivedBooksScreen from '../Screens/MyReceivedBooksScreen'

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
   Setting:{
       screen:SettingScreen
   },
   MyDonation:{
     screen:MyDonations
   },
   MyReceivedBooks:{
     screen:MyReceivedBooksScreen
   }
},
 
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })