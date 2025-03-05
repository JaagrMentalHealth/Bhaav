import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EmotionTest = () => {
  const { emotionId } = useParams();
  const [emotion, setEmotion] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/emotions/${emotionId}`)
      .then(response => response.json())
      .then(data => setEmotion(data))
      .catch(error => console.error('Error fetching emotion:', error));
  }, [emotionId]);

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
  };

  const submitAnswer = () => {
    // For simplicity, the correct answer is assumed to be the emotion's id.
    fetch('http://localhost:5000/api/emotion-test', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        selectedEmotionId: selectedOption,
        correctEmotionId: emotion.id
      })
    })
      .then(response => response.json())
      .then(data => setFeedback(data.isCorrect ? "Correct!" : "Try again!"))
      .catch(error => console.error('Error submitting test:', error));
  };

  if (!emotion) return <div>Loading...</div>;

  // For demo purposes, a fixed set of multiple-choice options is used.
  const options = [
    { id: 1, name: 'Happy' },
    { id: 2, name: 'Sad' },
    { id: 3, name: 'Angry' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Emotion Recognition Test</h1>
      <img src={emotion.image} alt={emotion.name} style={{ width: '200px' }} />
      <p>Which emotion does this image represent?</p>
      <div>
        {options.map(option => (
          <button
            key={option.id}
            onClick={() => handleOptionSelect(option.id)}
            style={{
              marginRight: '10px',
              padding: '10px',
              backgroundColor: selectedOption === option.id ? '#ddd' : '#fff'
            }}
          >
            {option.name}
          </button>
        ))}
      </div>
      <br />
      <button onClick={submitAnswer}>Submit Answer</button>
      {feedback && <p>{feedback}</p>}
    </div>
  );
};

export default EmotionTest;
