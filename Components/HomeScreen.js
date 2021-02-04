import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    };
    render(){
        return (
            <View style={styles.container}>
                <Text>Welcome to our app !</Text>
                <TouchableOpacity 
                style={styles.userBtn}
                onPress={() => {
                    this.props.navigation.navigate('Login')
                }}>
                <Text style={styles.btnText}>Login now</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnText: {
      fontSize: 18,
      textAlign: 'center',
      color: "#424242"
    },
    userBtn: {
      backgroundColor: "#FFD700",
      padding: 15,
      width: "45%"
    }
  })

  export default HomeScreen;
