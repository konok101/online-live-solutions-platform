import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [value, setValue] = useState('');

  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);

  return (
    <div>
      <h1>Home page</h1>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter the room"
      />
      <button onClick={handleJoinRoom}>Join</button>
    </div>
  );
};

export default Home;
