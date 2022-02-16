import api from "../api/api";
import _ from "lodash";
/**
 *
 * redux tunk for async action creator
 */
export const fetchPost = () => async (dispatch) => {
  const response = await api.get("/posts");

  dispatch({
    type: "FETCH_POSTS",
    payload: response.data,
  });
};

/**
 *
 * using lodash to memoize
 * one of the solutions.
 *
 */
// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);
// //Kind of a private function.
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await api.get(`/users/${id}`);
//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data,
//   });
// });

export const fetchUser = (id) => async (dispatch) => {
  const response = await api.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data,
  });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPost());

  const userId = _.uniq(_.map(getState().posts, "userId"));

  userId.forEach((id) => {
    dispatch(fetchUser(id));
  });
};
