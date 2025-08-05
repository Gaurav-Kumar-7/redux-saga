import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserRequest } from '../redux/actions';

const UserDetails = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) dispatch(fetchUserRequest(username));
  };

  return (
    <div className="user-container">
      <h2>GitHub User Lookup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {user && (
        <div className="user-card">
          <img src={user.avatar_url} alt={user.login} width={100} />
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Username:</strong> {user.login}</p>
          <p><strong>Followers:</strong> {user.followers}</p>
          <p><strong>Public Repos:</strong> {user.public_repos}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
