const express = require('express');
const cors = require('cors');
const { emotions } = require('./data');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Get all emotions
app.get('/api/emotions', (req, res) => {
  res.json(emotions);
});

// Get a single emotion by id
app.get('/api/emotions/:id', (req, res) => {
  const emotionId = parseInt(req.params.id);
  const emotion = emotions.find(e => e.id === emotionId);
  if (emotion) {
    res.json(emotion);
  } else {
    res.status(404).json({ error: 'Emotion not found' });
  }
});

// Endpoint to simulate an emotion recognition test
app.post('/api/emotion-test', (req, res) => {
  const { selectedEmotionId, correctEmotionId } = req.body;
  const isCorrect = selectedEmotionId === correctEmotionId;
  res.json({ isCorrect });
});

// Endpoint for the post-story quiz
app.post('/api/story-quiz', (req, res) => {
  const { answer, correctAnswer } = req.body;
  const isCorrect = answer === correctAnswer;
  res.json({ isCorrect });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
