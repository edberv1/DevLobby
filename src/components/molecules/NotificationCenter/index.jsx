import React, { useState, useRef, useEffect } from 'react'
import { FaBell } from 'react-icons/fa'
import NotificationMessage from '../../atoms/NotificationMessage'
import './NotificationCenter.scss'

const NotificationCenter = () => {
  const [showNotifications, setShowNotifications] = useState(false)
  const notificationRef = useRef(null)

  // Disappear on click outside
  useEffect(() => {
    function handleClickOutside (event) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications)
  }

  return (
    <div className='notificationCenter'>
      <div className='bell-button' onClick={handleNotificationClick}>
        <FaBell />
      </div>
      {showNotifications && (
        <div className='notification-container' ref={notificationRef}>
          <div className='msg-container'>
            <div className='icon'>#</div>
            <div className='msg'>No notifications yet</div>
          </div>
          <NotificationMessage message={'hello'} />
        </div>
      )}
    </div>
  )
}

export default NotificationCenter
