
import React from 'react';
import Modal from 'react-modal';
import { HiOutlineX } from 'react-icons/hi';

const InboxModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Inbox Modal"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Inbox</h2>
        <HiOutlineX size={25} onClick={closeModal} style={{ cursor: 'pointer' }} />
      </div>
      <p>message</p>
      <p>message</p>
      <p>message</p>
    </Modal>
  );
};

export default InboxModal;
