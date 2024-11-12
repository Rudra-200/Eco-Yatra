import React from 'react';
import { EcoChatbot } from './components/EcoChatbot';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
          EcoYatra AI Assistant
        </h1>
        <EcoChatbot />
      </div>
    </div>
  );
}

export default App;