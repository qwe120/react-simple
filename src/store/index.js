import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

const reducers = combineReducers({

})

const Store = createStore(reducers,applyMiddleware(thunk))
export default Store
