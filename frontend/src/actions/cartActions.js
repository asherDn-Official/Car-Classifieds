import { addCartItemRequest, addCartItemSuccess } from "../slicers/cartSlice";
import axios from "axios";

export const addCartItem = (id, quantity) => async (dispatch) => {
  try {
    dispatch(addCartItemRequest());
    const { data } = await axios.get(`/api/v1/product/${id}`);
    dispatch(
      addCartItemSuccess({
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
