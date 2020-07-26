import { combineReducers } from 'redux';
import filterReducer from './filter';
import pizzasReduces from './pizzas';

const rootReducer = combineReducers({
    filters: filterReducer,
    pizzas: pizzasReduces
});

export default rootReducer;