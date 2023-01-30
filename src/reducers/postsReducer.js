export const initialState = {
  posts: [],
  loading: false,
  hasError: false,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
