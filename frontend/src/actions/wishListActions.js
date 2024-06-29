import axios from "axios";
import {
  addWishListItemRequest,
  addWishListItemSuccess,
} from "../slicers/wishListSlice";

export const WishListItem = (id, quantity) => async (dispatch) => {
  try {
    dispatch(addWishListItemRequest());
    const { data } = await axios.get(`/api/v1/product/${id}`);
    dispatch(
      addWishListItemSuccess({
        product: data.product._id,
        name: data.product.bikename,
        bikekm: data.product.bikekm,
        biketype: data.product.biketype,
        bikeyear: data.product.bikeyear,
        bikeemmision: data.product.bikeemmision,
        price: data.product.price,
        image: data.product.images[0].image,
        stock: data.product.stock,
        quantity,
      })
    );
  } catch (error) {}
};
