import { configureStore } from '@reduxjs/toolkit';
import expenseSlice from './reducer';
import { Slice } from './slice';

export const store = configureStore({
    reducer : {
        expense : expenseSlice,
        [Slice.reducerPath]: Slice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(Slice.middleware)
})