import React, { useState } from 'react';
import './App.css';
import OTPVerification from './components/OTPVerification';
import ChatInterface from './components/ChatInterface';

function App() {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerificationSuccess = () => {
    setIsVerified(true);
  };

  return (
    <div className="App">
      {!isVerified ? (
        <OTPVerification onSuccess={handleVerificationSuccess} />
      ) : (
        <ChatInterface />
      )}
    </div>
  );
}

export default App;
