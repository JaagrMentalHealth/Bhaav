import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const EmotionLibrary = () => {
  const [emotions, setEmotions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/emotions')
      .then(response => response.json())
      .then(data => setEmotions(data))
      .catch(error => console.error('Error fetching emotions:', error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Emotion Library</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {emotions.map(emotion => (
          <div
            key={emotion.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              margin: '10px',
              padding: '10px',
              width: '200px'
            }}
          >
            <h3>{emotion.name}</h3>
            <img src={emotion.image} alt={emotion.name} style={{ width: '100%' }} />
            <p>{emotion.description}</p>
            <div>
              <Link to={`/test/${emotion.id}`} style={{ marginRight: '10px' }}>Take Test</Link>
              <Link to={`/story/${emotion.id}`}>Story</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmotionLibrary;
