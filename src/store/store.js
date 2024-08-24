import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Игнорируем действия persist
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        // Если вам нужно игнорировать несериализуемые данные в состоянии
        ignoredPaths: ["auth.register"], // или любое другое состояние, которое может быть несериализуемым
      },
    }).concat(thunk),
});

export const persistor = persistStore(store);
