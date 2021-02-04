import * as React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { withNavigation } from 'react-navigation';

function Paiement(props) {
    
    const factureId = props.navigation.getParam("itemId");
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Paiement de la facture {props.navigation.getParam("itemId")}</Text>
        <View style={styles.inputContainer}>
            <TextInput style={styles.inputStyle}
                placeholder="Num de facture"
                defaultValue={factureId}/>
            <TextInput style={styles.inputStyle}
                placeholder="Montant"/>
            { /** Ajouter un liste de créancier */ }
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        margin: 3
    },
    inputStyle: {
        backgroundColor: '#fff',
        width: "90%",
        padding: 15,
        marginBottom: 10
    }
});

export default withNavigation(Paiement);
