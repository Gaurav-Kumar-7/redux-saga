import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './actions';

const initialState = {
  loading: false,
  user: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true, user: null, error: null };
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null };
    case FETCH_USER_FAILURE:
      return { ...state, loading: false, user: null, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
