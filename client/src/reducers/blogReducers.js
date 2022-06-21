import {
  BLOG_LIST_SUCCESS,
  BLOG_LIST_FAIL,
  BLOG_LIST_REQUEST,
  BLOG_DETAILS_FAIL,
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_SUCCESS,
} from "../constants/blogContanst";

// Blog List
export const blogListReducer = (state = { blogs: [] }, action) => {
  switch (action.type) {
    case BLOG_LIST_REQUEST:
      return { loading: true, blogs: [] };
    case BLOG_LIST_SUCCESS:
      return { loading: false, blogs: action.payload };
    case BLOG_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// Blog Details
export const blogDetailsReducer = (
  state = { blog: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case BLOG_DETAILS_REQUEST:
      return { loading: true, ...state };
    case BLOG_DETAILS_SUCCESS:
      return { loading: false, blog: action.payload };
    case BLOG_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
