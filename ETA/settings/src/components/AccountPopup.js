import React, { useState } from 'react';
import './AccountPopup.css'; // Create this CSS file for styling

function AccountPopup({ onClose }) {
  const [notificationOn, setNotificationOn] = useState(false);

  const toggleNotification = () => {
    setNotificationOn(prevValue => !prevValue);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-title">Account Options</div>
        <div className="popup-option">
          <span>Notifications</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={notificationOn}
              onChange={toggleNotification}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="popup-option">
          <span>Change Password and Username</span>
        </div>
        <div className="popup-option">
          <span>Delete Account</span>
        </div>
        <button className="popup-close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default AccountPopup;
