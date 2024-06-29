import axios from "axios";
import {
  adminProductsFail,
  adminProductsRequest,
  adminProductsSuccess,
  productsFail,
  productsRequest,
  productsSuccess,
} from "../slicers/productsSlice";
import {
  deleteProductFail,
  deleteProductRequest,
  deleteProductSuccess,
  newProductFail,
  newProductRequest,
  newProductSuccess,
  productFail,
  productRequest,
  productSuccess,
  updateProductFail,
  updateProductRequest,
  updateProductSuccess,
} from "../slicers/productslice";

export const getProducts =
  (
    keyword,
    price,
    bikekm,
    category,
    biketype,
    bikeCCtypecategories,
    currentPage,
    sort
  ) =>
  async (dispatch) => {
    try {
      dispatch(productsRequest());

      let link = `/api/v1/products?page=${currentPage}`;

      console.log("Key", keyword);
      if (keyword) {
        link += `&keyword=${keyword}`;
      }

      if (price) {
        link += `&price[gte]=${price[0]}&price[lte]=${price[1]}`;
      }

      if (bikekm) {
        link += `&bikekm[gte]=${bikekm[0]}&bikekm[lte]=${bikekm[1]}`;
      }

      if (category !== "All") {
        link += `&category=${category}`;
      }

      if (biketype !== "All") {
        link += `&biketype=${biketype}`;
      }
      if (bikeCCtypecategories !== "All") {
        link += `&bikeCCtypecategories=${bikeCCtypecategories}`;
      }

      if (sort) {
        link += `&sort=${sort}`;
      }
      console.log("Dropsort", sort);
      const { data } = await axios.get(link);
      dispatch(productsSuccess(data));
    } catch (error) {
      // handle Error
      dispatch(productsFail(error.response.data.message));
    }
  };

export const getProduct = (id) => async (dispatch) => {
  try {
    dispatch(productRequest());
    const { data } = await axios.get(`/api/v1/product/${id}`);
    // console.log(data);
    dispatch(productSuccess(data));
  } catch (error) {
    // handle Error
    dispatch(productFail(error.response.data.message));
  }
};

export const getAdminProducts = async (dispatch) => {
  try {
    dispatch(adminProductsRequest());

    const { data } = await axios.get(`/api/v1/admin/products`);
    dispatch(adminProductsSuccess(data));
  } catch (error) {
    // handle Error
    dispatch(adminProductsFail(error.response.data.message));
  }
};

export const createNewProduct = (productData) => async (dispatch) => {
  try {
    dispatch(newProductRequest());
    const { data } = await axios.post(`/api/v1/admin/product/new`, productData);
    dispatch(newProductSuccess(data));
  } catch (error) {
    // handle Error
    dispatch(newProductFail(error.response.data.message));
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch(deleteProductRequest());
    await axios.delete(`/api/v1/admin/product/${id}`);
    dispatch(deleteProductSuccess());
  } catch (error) {
    // handle Error
    dispatch(deleteProductFail(error.response.data.message));
  }
};

export const updateProduct = (id, productData) => async (dispatch) => {
  try {
    dispatch(updateProductRequest());
    const { data } = await axios.put(
      `/api/v1/admin/product/${id}`,
      productData
    );
    dispatch(updateProductSuccess(data));
  } catch (error) {
    // handle Error
    dispatch(updateProductFail(error.response.data.message));
  }
};
