import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Storytelling = () => {
  const { emotionId } = useParams();
  const [emotion, setEmotion] = useState(null);
  const [quizAnswer, setQuizAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/emotions/${emotionId}`)
      .then(response => response.json())
      .then(data => setEmotion(data))
      .catch(error => console.error('Error fetching emotion:', error));
  }, [emotionId]);

  const submitQuiz = () => {
    // For demonstration, assume the correct answer is "yes" for every story.
    fetch('http://localhost:5000/api/story-quiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        answer: quizAnswer.toLowerCase(),
        correctAnswer: 'yes'
      })
    })
      .then(response => response.json())
      .then(data => setFeedback(data.isCorrect ? "Great job!" : "Let's try again!"))
      .catch(error => console.error('Error submitting story quiz:', error));
  };

  if (!emotion) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{emotion.story.title}</h1>
      <p>{emotion.story.content}</p>
      <p>Did you understand the coping mechanism? (Answer with "yes")</p>
      <input
        type="text"
        value={quizAnswer}
        onChange={(e) => setQuizAnswer(e.target.value)}
      />
      <button onClick={submitQuiz}>Submit</button>
      {feedback && <p>{feedback}</p>}
    </div>
  );
};

export default Storytelling;
