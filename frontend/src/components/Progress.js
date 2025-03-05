import React from 'react';

const Progress = () => {
  // For demo purposes, static progress data is used.
  const progressData = {
    lessonsCompleted: 2,
    totalLessons: 3,
    score: 80
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Progress Report</h1>
      <p>Lessons Completed: {progressData.lessonsCompleted} / {progressData.totalLessons}</p>
      <p>Your Score: {progressData.score}%</p>
      <p>Keep up the great work!</p>
    </div>
  );
};

export default Progress;
