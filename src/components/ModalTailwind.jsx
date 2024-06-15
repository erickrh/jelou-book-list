const ModalTailwind = ({ showModal, setShowModal, title, children }) => {
  if (!showModal) return null;

  const handleClose = (e) => {
    if (e.target.id === 'modal-container') {
      setShowModal(false);
    }
  };

  return (
    <div
      id='modal-container'
      className='fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50'
      onClick={handleClose}
    >
      <div className='absolute bottom-0 mx-auto w-11/12 max-w-lg animate-fade-up rounded-lg bg-white shadow-lg animate-duration-1000 animate-once animate-ease-out'>
        <div className='flex items-center justify-between border-b p-4'>
          <h3 className='text-xl font-semibold'>{title}</h3>
          <button onClick={() => setShowModal(false)} className='text-gray-400 hover:text-gray-600'>
            &times;
          </button>
        </div>
        <div className='p-4'>{children}</div>
        <div className='flex justify-end border-t p-4'>
          <button
            onClick={() => setShowModal(false)}
            className='rounded bg-secondary px-4 py-2 text-white hover:bg-gray-700'
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalTailwind;
