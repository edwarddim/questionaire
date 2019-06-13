import { combineReducers} from 'redux';
// IMPORT ALL OF YOUR REDUCERS //
import adminReducer from './adminReducer';
// import userReducer from './userReducer';


export default combineReducers({
    adminState:adminReducer,
    // userReducer:userReducer
})