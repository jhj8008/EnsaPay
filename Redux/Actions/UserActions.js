import axios from 'axios';

export const onUserLogin = ({ email, password }) => {
    return async (dispatch) => {
        //var msg = "--void--";
        try {
            const response = await axios.post("http://10.0.2.2:9000/api/login/", {
                email,
                password
            });
            dispatch({ 
                type: 'DO_LOGIN',
                payload: response.data
            });
        } catch (error) {
            dispatch({ 
                type: 'ON_ERROR',
                payload: "login_error"
            });
        }
    }
}

export const onFetchCreanciers = ({ id }) => {//{ email }
    return async (dispatch) => {
        try {
            const response = await axios.get('http://10.0.2.2:9000/api/creanciers/', {
                userId: id
            });    
            
            dispatch({ 
                type: 'FETCH_CREANCIERS',
                payload: response.data
            });
        } catch (error) {
            dispatch({ 
                type: 'ON_ERROR',
                payload: error
            });
        }
    }
}

export const onFetchFactures = ({ id }) => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://10.0.2.2:9000/api/factures/', {
                userId: id
            });
            //console.log(response.data);    
            dispatch({ 
                type: 'FETCH_FACTURES',
                payload: response.data
            });
        } catch (error) {
            dispatch({ 
                type: 'ON_ERROR',
                payload: error
            });
        }
    }
}


export const onPayment = ({ userId, montant }) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://10.0.2.2:9000/api/paiement/', {
                // request body
                userId: userId,
                montant: montant
            });
            dispatch({
                type: 'ON_PAYMENT',
                payload: response.data
            });
        } catch (error) {
            //console.log(msg);
            dispatch({
                type: 'ON_ERROR',
                payload: error
            });
        }
    }
}
