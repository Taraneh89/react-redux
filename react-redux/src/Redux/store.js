import {createStore} from 'redux';
import mobReducer from './Mob/mobReducer';

const store = createStore(mobReducer)

export default store;