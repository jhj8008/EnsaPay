//import 'localstorage-polyfill';
import AsyncStorage from '@react-native-community/async-storage';

export const _storeData = async (key, data) => {
    try {
        //console.log("data to be stored: " + data);
        await AsyncStorage.setItem(key, data);
    } catch (e) {
        console.log(e);
    }
}

export const userReducer = (state = { isAuthenticated: false }, action) => {
    switch (action.type) {
        case 'DO_LOGIN':
            _storeData("userId", action.payload.userId.toString());
            _storeData("token", action.payload.token);
            /*AsyncStorage.setItem("token", JSON.stringify(action.payload.token));
            */
            return {
                ...state,
                isAuthenticated: true,
                userId: action.payload.userId,
                token: action.payload.token
            }
        case 'FETCH_FACTURES':
            return {
                ...state,
                factures: action.payload
            }
        case 'FETCH_CREANCIERS':
            return {
                ...state,
                creanciers: action.payload
            }
        case 'ON_PAYMENT':
            return {
                ...state,
                msgPaiement: action.payload
            }
        case 'ON_ERROR':
            return {
                ...state,
                appError: action.payload
            }
        default:
            return state;
    }
}
