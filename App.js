import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

/* Screens */
import HomeScreen from './src/screens/home/HomeScreen';
import KayitScreen from './src/screens/kayit/KayitScreen';
import ListeScreen from './src/screens/liste/ListeScreen';


const stack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title : 'Üyelik Sistemi'
    }
  },
  Kayit: {
    screen: KayitScreen,
    navigationOptions: {
      title : 'Yeni Üyelik'
    }
  },
  Liste: {
    screen: ListeScreen,
    navigationOptions: {
      title : 'Üye Listesi'
    }
  },
},{
  headerLayoutPreset : 'center'
});


const App = createAppContainer(stack);

export default App;
