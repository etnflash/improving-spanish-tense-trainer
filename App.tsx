import React from 'react';
import SpanishTenseQuiz from './modules/spanishTenseQuiz/SpanishTenseQuiz';

// In a real app, this would use React Router. 
// For this contained delivery, we render the module directly.

const App: React.FC = () => {
  return (
    <SpanishTenseQuiz />
  );
};

export default App;
