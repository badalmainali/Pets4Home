import axios from "axios";
import {
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_LIST_FAIL,
  BLOG_DETAILS_FAIL,
  BLOG_DETAILS_SUCCESS,
  BLOG_DETAILS_REQUEST,
} from "../constants/blogContanst";
const API = "http://localhost:5000";

// LisBLOG
export const listBlogs = () => async (dispatch) => {
  try {
    dispatch({ type: BLOG_LIST_REQUEST });

    const { data } = await axios.get(`${API}/api/blogs`);
    dispatch({
      type: BLOG_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BLOG_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
//Blog Details
export const listBlogDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: BLOG_DETAILS_REQUEST });
  
      const { data } = await axios.get(`${API}/api/blogs/${id}`);
      dispatch({
        type: BLOG_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BLOG_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
