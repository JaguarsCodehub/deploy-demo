import { useEffect, useState } from 'react';

const BackendFetcher = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {

    console.log('fetching from backend');
    fetch('http://localhost:5000/ping')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Error contacting backend'));
    console.log('fetched from backend');
  }, []);

  return (
    <div>
      <h2>Backend says:</h2>
      <p>{message}</p>
    </div>
  );
};

export default BackendFetcher;
