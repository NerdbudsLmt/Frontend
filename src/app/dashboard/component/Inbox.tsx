import React, { useState } from 'react'
import InboxModal from './InboxModal'
import { HiOutlineChatBubbleLeftEllipsis } from 'react-icons/hi2'

export const Inbox = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <div>
      <HiOutlineChatBubbleLeftEllipsis
        size={25}
        onClick={openModal}
        style={{ cursor: 'pointer' }}
      />
      <InboxModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
