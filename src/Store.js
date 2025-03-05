import { configureStore } from '@reduxjs/toolkit';

import productsSlice from './Slices/Products';
import usersCredential from './Slices/User';

const store = configureStore({
    reducer: {
        products: productsSlice,
        user: usersCredential
    }
});

export default store;