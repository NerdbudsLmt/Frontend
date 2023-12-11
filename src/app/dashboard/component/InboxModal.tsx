import React from 'react'
import { HiOutlineX } from 'react-icons/hi'

interface InboxModalProps {
  isOpen: boolean
  onClose: () => void
}

const InboxModal: React.FC<InboxModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null
  }

  return (
    <>
      <div
        style={{
          width: '320px',
          position: 'absolute',
          top: '55px',
          right: '0%',
          background: '#fff',
          padding: '20px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
          zIndex: '999',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h2 style={{ margin: 0, marginRight: '10px' }}>Inbox</h2>
          </div>
          <HiOutlineX
            size={20}
            onClick={onClose}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <p> Nerd message</p>
        <p> Nerd message</p>
        <p> Nerd message</p>
      </div>
    </>
  )
}

export default InboxModal
