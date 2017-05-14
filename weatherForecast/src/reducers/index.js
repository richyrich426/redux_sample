import { combineReducers } from 'redux';
import WeatherReducer from './reducer_Weather';

const rootReducer = combineReducers({
    weather: WeatherReducer
});

export default rootReducer;
