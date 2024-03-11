import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import "./AdminNotificationCenter.scss"

const AdminNotificationCenter = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="notification-center">
      <button className="notification-icon" onClick={handleNotificationClick}>
        <FontAwesomeIcon icon={faBell} />
      </button>
      {showNotifications && (
        <div className="notifications">
          <p>No notifications yet</p>
        </div>
      )}
    </div>
  );
};

export default AdminNotificationCenter;