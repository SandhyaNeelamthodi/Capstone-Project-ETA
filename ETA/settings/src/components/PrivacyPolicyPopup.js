import React from 'react';

function PrivacyPolicyPopup({ onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Privacy Policy</h2>
        {/* Add your privacy policy content here */}
        We take your privacy seriously. This Privacy Policy describes how we collect, use, and share information when you use our Event Tracker app.        {/* <button onClick={onClose}>Close</button> */}
      </div>
    </div>
  );
}

export default PrivacyPolicyPopup;


