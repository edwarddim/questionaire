import { combineReducers} from 'redux';
// IMPORT ALL OF YOUR REDUCERS //
import exampleReducer from './exampleReducers';

export default combineReducers({
    example: exampleReducer
})