import {applyMiddleware, createStore} from 'redux';
import {createWrapper, Context} from 'next-redux-wrapper';
import CombinedReducer from "./reducers/CombinedReducer";
import thunk from "redux-thunk";

// create a makeStore function
const makeStore = (context: Context) => createStore(CombinedReducer,applyMiddleware(thunk));

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});
