import { legacy_createStore as createStore } from "redux";
import  rootReducer  from './BookRedux/Reducer';

const store = createStore(rootReducer);

export default store;