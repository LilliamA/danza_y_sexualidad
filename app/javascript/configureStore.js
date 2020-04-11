import {createStore, applyMiddleware } from "redux";

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  things: [
    {
      name: "test-123",
      guid: "123"
    }
  ]
};
import rootReducer from "./reducers";

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
      )
    )
  );
  return store;
}