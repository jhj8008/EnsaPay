import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { onFetchFactures } from '../Redux/Actions/UserActions';
import AsyncStorage from '@react-native-community/async-storage'

function Factures(props) {
    const onFetchFactures = props.onFetchFactures;
    const [ prod, setProd ] = React.useState(
        [
            {title: '#111', type: 'Eau', date: '02/02/2021'}, {title: '#222', type: 'éléctricité',  date: '05/02/2021'}, {title: '#333', type: 'Téléphone', date: '10/01/2021'}
        ]
    );

    const readData = async () => {
        try {
            let _id = await AsyncStorage.getItem("userId");
            onFetchFactures(_id);
        } catch (error) {
            console.log(error);
        }
        
        setProd(props.userReducer.factures);
    }

    useEffect(() => {
        readData();
    }, []);
    
    const renderRow = ({item}) => {
        return (
            <View style={styles.itemRow}>
                <View style={styles.itemDesc}>
                    <View style={styles.itemNum}>
                        <Text style={styles.itemText}>{item.factureID}</Text>
                    </View>
                    <View style={styles.itemBloc}>
                        <Text style={styles.itemSubtitle}>Type:</Text>
                        <Text style={styles.itemType}>{item.type}</Text>
                    </View>
                    <View style={styles.itemBloc}>
                        <Text style={styles.itemSubtitle}>Date:</Text>
                        <Text style={styles.itemType}>{item.date}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.userBtn} onPress={() => {props.navigation.navigate('Paiement', { itemId: item.title })}}>
                    <Text style={styles.btnText}>Payer </Text>     
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Mes factures
            </Text>
            <FlatList 
                style={styles.listContainer}
                data={prod}
                renderItem={renderRow}
                keyExtractor={(item, index) => index.toString()}
            />
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
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    listContainer: {
        width: '96%'
    },
    itemRow: {
        flex: 1,
        flexDirection: 'row',
        borderColor: '#ccc',
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 3
    },
    itemText: {
        fontSize: 15,
        padding: 7
    },
    itemDesc: {
        flex: 4,
        flexDirection: 'row',
        borderColor: '#aeb3e6',
        borderWidth: 1
    },
    itemSubtitle: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 14
    },
    itemType: {
        flex: 2,
        paddingLeft: 5,
        fontSize: 14,
    },
    itemBloc: {
        flex: 2,
        flexDirection: 'row',
        paddingTop: 6
    },
    itemNum: {
        flex: 1,
        borderRightWidth: 1,
        borderColor: '#ccc',
        marginRight: 2
    },
    userBtn: {
        flex: 1,
        backgroundColor: '#95b8f0'
    },
    btnText: {
        flex: 1,
        textAlignVertical: 'center',
        fontSize: 14,
        textAlign: 'center',
        color: "#fff"
    }
});

const mapStateToProps = (state) => ({
    userReducer: state.userReducer
});

export default withNavigation(connect(mapStateToProps, {onFetchFactures})(Factures));
