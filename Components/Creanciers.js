import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { onFetchCreanciers } from '../Redux/Actions/UserActions';
import AsyncStorage from '@react-native-community/async-storage'

function Creanciers(props) {
    const onFetchCreanciers = props.onFetchCreanciers;
    const [ prod, setProd ] = React.useState([]);

    const readData = async () => {
        try {
            let _id = await AsyncStorage.getItem("userId");
            onFetchCreanciers(_id);
        } catch (error) {
            console.log(error);
        }
        
        setProd(props.userReducer.creanciers);
    }

    useEffect(() => {
        readData();
    }, []);
    
    const renderRow = ({item}) => {
        return (
            <View style={styles.itemRow}>
                <View style={styles.itemDesc}>
                    <View style={styles.itemNum}>
                        <Text style={styles.itemText}>{item.creancierID}</Text>
                    </View>
                    <View style={styles.itemBloc}>
                        <Text style={styles.itemSubtitle}>Nom:</Text>
                        <Text style={styles.itemType}>{item.title}</Text>
                    </View>
                    <View style={styles.itemBloc}>
                        <Text style={styles.itemSubtitle}>Date:</Text>
                        <Text style={styles.itemType}>{item.date}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.userBtn} onPress={() => {props.navigation.navigate('Factures', { itemId: item.creancierID })}}>
                    <Text style={styles.btnText}>Voir </Text>     
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Liste des créanciers
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

export default withNavigation(connect(mapStateToProps, {onFetchCreanciers})(Creanciers));
