export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';


export const fetchUserRequest = (username) => ({
  type: FETCH_USER_REQUEST,
  payload: username,
});

export const fetchUserSuccess = (data) => ({
  type: FETCH_USER_SUCCESS,
  payload: data,
});

export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});



// export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
// export const FETCH_REPOS_REQUEST = 'FETCH_REPOS_REQUEST';
// export const FETCH_FOLLOWERS_REQUEST = 'FETCH_FOLLOWERS_REQUEST';

// export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
// export const FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS';
// export const FETCH_FOLLOWERS_SUCCESS = 'FETCH_FOLLOWERS_SUCCESS';

// export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
// export const FETCH_REPOS_FAILURE = 'FETCH_REPOS_FAILURE';
// export const FETCH_FOLLOWERS_FAILURE = 'FETCH_FOLLOWERS_FAILURE';

// export const fetchUser = (username) => ({ type: 'FETCH_USER_REQUEST', payload: username });
// export const fetchRepos = (username) => ({ type: 'FETCH_REPOS_REQUEST', payload: username });
// export const fetchFollowers = (username) => ({ type: 'FETCH_FOLLOWERS_REQUEST', payload: username });

// export const fetchUserSuccess = (data) => ({ type: 'FETCH_USER_SUCCESS', payload: data });
// export const fetchReposSuccess = (data) => ({ type: 'FETCH_REPOS_SUCCESS', payload: data });
// export const fetchFollowersSuccess = (data) => ({ type: 'FETCH_FOLLOWERS_SUCCESS', payload: data });

// export const fetchUserFailure = (error) => ({ type: 'FETCH_USER_FAILURE', payload: error });
// export const fetchReposFailure = (error) => ({ type: 'FETCH_REPOS_FAILURE', payload: error });
// export const fetchFollowersFailure = (error) => ({ type: 'FETCH_FOLLOWERS_FAILURE', payload: error });

