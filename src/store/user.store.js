// userStore.js
import { configureStore } from '@reduxjs/toolkit';

const initialState = null;

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_USER': {
            return {
                ...action.payload
            }
        }
        default: {
            return state
        }
    }
};

const userStore = configureStore({
    reducer: {
        user: userReducer
    }
});

export default userStore;
