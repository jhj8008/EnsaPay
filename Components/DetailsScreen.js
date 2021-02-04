import * as React from 'react';
import { Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';

function DetailsScreen(props) {

    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details de la facture {props.navigation.getParam("itemId")}</Text>
    </View>
    );
}

  export default withNavigation(DetailsScreen);
