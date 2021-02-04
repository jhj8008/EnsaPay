import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
//import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
//import { onFetchFactures } from '../Redux/Actions/UserActions';

function Home(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.homeTitle}>Page d'acceuille !</Text>
            <TouchableOpacity
              style={styles.userBtn}
              onPress={() => {props.navigation.navigate('Creanciers');}}>
                <Text style={styles.btnText}>Voir tous les créanciers</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    homeTitle: {
      fontSize: 18,
      fontWeight: 'bold'
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

/*const mapStateToProps = (state) => ({
  userReducer: state.userReducer,
});*/

export default withNavigation(Home);//connect(mapStateToProps, {onFetchFactures})
