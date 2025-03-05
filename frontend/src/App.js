import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EmotionLibrary from './components/EmotionLibrary';
import EmotionTest from './components/EmotionTest';
import Storytelling from './components/Storytelling';
import Progress from './components/Progress';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<EmotionLibrary />} />
        <Route path="/test/:emotionId" element={<EmotionTest />} />
        <Route path="/story/:emotionId" element={<Storytelling />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </div>
  );
};

export default App;
