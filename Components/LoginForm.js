import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { onUserLogin } from '../Redux/Actions/UserActions'
import Home from './Home';

const LoginForm = (props) => {
    
    const { userReducer, onUserLogin } = props;

    const [ email, setEmail ] = useState('');

    const [ password, setPassword ] =  useState('');


    const onSubmitLogin = (e, p) => {
      let EmailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;// regex to test email
      let PasswordRegx = /^[0-9a-zA-Z]{8,}$/;// regex to test password -> /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
      /**
       * Password regex explained:
       * /^
          (?=.*\d)          // should contain at least one digit
          (?=.*[a-z])       // should contain at least one lower case
          (?=.*[A-Z])       // should contain at least one upper case
          [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters
        $/
       */
      if(EmailRegx.test(e) === false || PasswordRegx.test(p) === false) {
        Alert.alert('Erreur de login', '* Votre mot de passe doit contenir au moins 8 caractères\n* Votre email est invalide');
        return
      }else {
       // console.log("Logging in with: " + e + " -> " + p);
        onUserLogin({ email: e, password: p });
      }
    }
    if(userReducer.isAuthenticated === true) {
      return (<Home />);
    }
    return ( <View style={styles.container}>
            <StatusBar 
                backgroundColor="#1e90ff"
                barStyle="light-content"/>
            <Text style={styles.mainTitle}>Login to my App</Text>
            { (userReducer.appError === "login_error" ? <Text style={styles.msgErreur}>Votre email/mot de passe est incorrecte</Text> : null ) }
            <TextInput 
                style={styles.inputStyle}
                onChangeText={email => setEmail(email)}
                placeholder="Nom d'utilisateur"
                defaultValue={email}/>
            <TextInput 
                style={styles.inputStyle}
                placeholder="Mot de passe"
                onChangeText={password => setPassword(password)}
                defaultValue={password}
                secureTextEntry/>
            <View style={styles.btnContainer}>
                <TouchableOpacity 
                style={styles.userBtn}
                onPress={() => onSubmitLogin(email, password)}>
                <Text style={styles.btnText}>Se connecter</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    msgErreur: {
      fontSize: 10,
      color: "#ff310d",
      padding: 3
    },
    container: {
      flex: 1,
      backgroundColor: '#dddddd',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainTitle: {
      fontSize: 20,
      color: '#30475e',
      marginBottom: 10
    },
    inputStyle: {
      backgroundColor: '#fff',
      width: "90%",
      padding: 15,
      marginBottom: 10
    },
    btnContainer: {
      flexDirection: "row",
      justifyContent: "space-between"
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

const mapStateToProps = (state) => ({
  userReducer: state.userReducer,
});


export default withNavigation(connect(mapStateToProps, {onUserLogin})(LoginForm));
