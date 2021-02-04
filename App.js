import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './Components/HomeScreen';
import DetailsScreen from './Components/DetailsScreen';
import Login from './Components/LoginForm';
import Factures from './Components/Factures';
import Paiement from './Components/Paiement';
import Creanciers from './Components/Creanciers';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

const RootStack = createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Home",
        headerShown: false,
      }
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: {
        title: "Details",
      }
    },
    Factures: {
      screen: Factures,
      navigationOptions: {
        title: "Factures",
      }
    },
    Creanciers: {
      screen: Creanciers,
      navigationOptions: {
        title: "Créanciers"
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        title: "Login",
        headerShown: false,
      }
    },
    Paiement: {
      screen: Paiement,
      navigationOptions: {
        title: "Paiement de Facture"
      }
    }
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#1e90ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        textAlign: 'center',
        marginRight: 50,
        flex: 1
      }
    }
  }
);

export const AppContainer = createAppContainer(RootStack);

function App() {
  const [ isLoading, setIsLoading ] = React.useState();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if( isLoading ) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
  );
}

export default App;
