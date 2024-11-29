import React from 'react';

const LogoutModal = ({ isOpen, onClose, onConfirm}) => {
  if (!isOpen) return null; // Don't render modal if it's not open

  return (
    <div className="fixed inset-0 h-[100vh] bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white px-6 py-12 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl text-black font-semibold mb-4">Are you sure you want to logout?</h2>
        {/* <p className='text-black'>Are you sure you want to logout?</p> */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={onConfirm}
          >
            Yes, Logout
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
