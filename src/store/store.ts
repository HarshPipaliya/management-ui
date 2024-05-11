import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "api";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware]),
});

// export const RootState = ReturnType<typeof store.getState>;
export const AppDispatch = typeof store.dispatch;
export default store;
