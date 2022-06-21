import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  CREATE_PRODUCTS,
} from "../constants/productConstants";
const API = "http://localhost:5000";

// Create Products
export const createProducts = (products) => (dispatch) => {
  try {
    axios.post(`API/api/product/create`, products).then((res) =>
      dispatch({
        type: CREATE_PRODUCTS,
        payload: res.data,
      })
    );
  } catch (error) {
    dispatch({
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// List Products
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get(`${API}/api/products`);
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
// Product Details
export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`${API}/api/products/${id}`);
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
