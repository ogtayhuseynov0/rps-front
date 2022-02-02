import {createStore} from 'redux';
import {createWrapper, Context} from 'next-redux-wrapper';
import CombinedReducer from "./reducers/CombinedReducer";

// create a makeStore function
const makeStore = (context: Context) => createStore(CombinedReducer);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});
