// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import authReducer from "./reducers/authSlice";
import balanceReducer from "./reducers/balanceReducer"; 
import TimeValentReducer from "./reducers/TimeValent";

const balancePersistConfig = {
  key: "balance",
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer({ key: "auth", storage }, authReducer),
  balance: persistReducer(balancePersistConfig, balanceReducer), // Wrap the balance reducer with persistReducer
  timeValent: TimeValentReducer
});


// No need to import redux-thunk explicitly; it's included by default in configureStore
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        ignoredPaths: ["auth.token"],  // Adjusted to reflect actual ignored paths
      },
    }),
});

export const persistor = persistStore(store);
