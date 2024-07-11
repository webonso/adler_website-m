import React from 'react';

function BlogModal({ isVisible, onClose, children }) {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  };
  return (
    <div className="fixed inset-0 text-black bg-black opacity-25 backdrop:blur-lg z-[9999999999] 
    flex items-center justify-center">
      <div
        className="w-[600px] flex flex-col"
        id="wrapper"
        onClick={handleClose}
      >
        <button
          onClick={() => onClose()}
          className="text-white tex-xl flex flex-col place-self-end"
        >
          X
        </button>
        <div className="bg-white p-2 rounded-sm">{children}</div>
      </div>
    </div>
  );
}

export default BlogModal;
