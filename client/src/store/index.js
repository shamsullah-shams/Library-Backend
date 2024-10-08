import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from './slices/categories';

const store = configureStore({
  reducer: {
    categories: categoryReducer,
  },
});

export default store;
