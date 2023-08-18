
import React, { useState } from 'react';
import PrivacyPolicyPopup from './PrivacyPolicyPopup';

function PrivacyCard() {
  const [popupVisible, setPopupVisible] = useState(false);

  const handlePrivacyCardClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="card" onClick={handlePrivacyCardClick}>
      Privacy Policy
      {popupVisible && <PrivacyPolicyPopup onClose={handleClosePopup} />}
    </div>
  );
}

export default PrivacyCard;