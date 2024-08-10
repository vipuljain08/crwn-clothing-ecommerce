// import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createSlice } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

export const {setCategories} = categoriesSlice.actions
export const categoriesReducer = categoriesSlice.reducer

// export const categoriesReducer = (
//   state = CATEGORIES_INITIAL_STATE,
//   action = {}
// ) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
//       return { ...state, categories: payload };
//     default:
//       return state;
//   }
// };
