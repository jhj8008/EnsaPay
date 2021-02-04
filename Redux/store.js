import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './Reducers/RootReducer';


// store
export const store = createStore(rootReducer, applyMiddleware(thunk));
