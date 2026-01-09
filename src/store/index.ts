import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "@/features/categories/categoriesSlice";
import bestSellersReducer from "@/features/bestSellers/bestSellersSlice";
export const store = configureStore({
  reducer: {
    categories: categoriesReducer,

    bestSellers: bestSellersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// TypeScript types for the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
