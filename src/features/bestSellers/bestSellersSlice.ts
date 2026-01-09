// features/bestSellers/bestSellersSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialBestSellers } from "./bestSellersData";
import { TProduct } from "@/types";

// Define the shape of your best sellers state
interface BestSellersState {
  items: TProduct[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: BestSellersState = {
  items: initialBestSellers,
  loading: false,
  error: null,
};

// Create the slice
const bestSellersSlice = createSlice({
  name: "bestSellers",
  initialState,
  reducers: {
    // Action to set best sellers (useful when fetching from MongoDB later)
    setBestSellers: (state, action: PayloadAction<TProduct[]>) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },

    // Action to add a new best seller
    addBestSeller: (state, action: PayloadAction<TProduct>) => {
      state.items.push(action.payload);
    },

    // Action to update a best seller
    updateBestSeller: (state, action: PayloadAction<TProduct>) => {
      const index = state.items.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },

    // Action to delete a best seller
    deleteBestSeller: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (product) => product.id !== action.payload
      );
    },

    // Action to set loading state
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    // Action to set error
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// Export actions
export const {
  setBestSellers,
  addBestSeller,
  updateBestSeller,
  deleteBestSeller,
  setLoading,
  setError,
} = bestSellersSlice.actions;

// Export reducer
export default bestSellersSlice.reducer;
