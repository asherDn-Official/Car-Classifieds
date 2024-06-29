import { createSlice } from "@reduxjs/toolkit";

const WishListSlice = createSlice({
  name: "Wishlist",
  initialState: {
    items: localStorage.getItem("WishListItems")
      ? JSON.parse(localStorage.getItem("WishListItems"))
      : [],
    loading: false,
  },

  reducers: {
    addWishListItemRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    addWishListItemSuccess(state, action) {
      const item = action.payload;

      const isItemExist = state.items.find((i) => i.product === item.product);

      if (isItemExist) {
        state = {
          ...state,
          loading: false,
        };
      } else {
        state = {
          items: [...state.items, item],
          loading: false,
        };
        localStorage.setItem("WishListItems", JSON.stringify(state.items));
      }

      return state;
    },

    removeItemFromWishList(state, action) {
      const filterItems = state.items.filter((item) => {
        return item.product !== action.payload;
      });
      localStorage.setItem("WishListItems", JSON.stringify(filterItems));

      return {
        ...state,
        items: filterItems,
      };
    },
  },
});

const { actions, reducer } = WishListSlice;
export const {
  addWishListItemRequest,
  addWishListItemSuccess,
  removeItemFromWishList,
} = actions;
export default reducer;
