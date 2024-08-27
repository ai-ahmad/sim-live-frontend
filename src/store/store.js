// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import {thunk} from "redux-thunk";
import authReducer from "./reducers/authSlice";
import balanceReducer from "./reducers/balanceReducer";  // Imported the balance reducer
import TimeValentReducer from "./reducers/TimeValent";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  balance: balanceReducer,  // Added balance reducer directly
  timeValent: TimeValentReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        ignoredPaths: ["auth.token"],  // Adjusted to reflect actual ignored paths
      },
    }).concat(thunk),
});

export const persistor = persistStore(store);
