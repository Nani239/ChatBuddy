import React, { useState } from 'react';

function OTPVerification({ onSuccess }) {
  const [otp, setOtp] = useState('');
  const hardcodedOTP = '123456'; // Hardcoded OTP for demonstration

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp === hardcodedOTP) {
      onSuccess();
    }
  };

  return (
    <div className="otp-verification">
      <h2>OTP Verification</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
}

export default OTPVerification;
