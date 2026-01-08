import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialCategories } from './categoriesData';
import { TCategory } from '@/types';

// Define the shape of your categories state
interface CategoriesState {
  items: TCategory[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: CategoriesState = {
  items: initialCategories,
  loading: false,
  error: null,
};

// Create the slice
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    // Action to set categories (useful when fetching from MongoDB later)
    setCategories: (state, action: PayloadAction<TCategory[]>) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    
    // Action to add a new category
    addCategory: (state, action: PayloadAction<TCategory>) => {
      state.items.push(action.payload);
    },
    
    // Action to update a category
    updateCategory: (state, action: PayloadAction<TCategory>) => {
      const index = state.items.findIndex(cat => cat.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    
    // Action to delete a category
    deleteCategory: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(cat => cat.id !== action.payload);
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
  setCategories,
  addCategory,
  updateCategory,
  deleteCategory,
  setLoading,
  setError,
} = categoriesSlice.actions;

// Export reducer
export default categoriesSlice.reducer;