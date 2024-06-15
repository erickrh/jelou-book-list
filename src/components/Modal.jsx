import { useDispatch } from 'react-redux';

const Modal = ({ showModal, setShowModal, title, children }) => {
  const dispatch = useDispatch();

  if (!showModal) return null;

  const handleClose = (e) => {
    if (e.target.id === 'modal-container') {
      dispatch(setShowModal(false));
    }
  };

  return (
    <div
      id='modal-container'
      className='fixed inset-0 z-50 flex animate-fade items-center justify-center bg-gray-900 bg-opacity-50 animate-duration-300 animate-once animate-ease-out'
      onClick={handleClose}
    >
      <div className='absolute bottom-0 mx-auto w-11/12 max-w-lg animate-fade-up rounded-lg bg-white shadow-lg animate-duration-300 animate-once animate-ease-out'>
        <div className='flex items-center justify-between border-b p-4'>
          <h3 className='m-auto text-xl font-semibold text-gray-800'>{title}</h3>
          <button
            onClick={() => dispatch(setShowModal(false))}
            className='text-gray-400 hover:text-gray-600'
          >
            &times;
          </button>
        </div>
        <div className='flex justify-between p-4'>{children}</div>
        <div className='flex justify-center border-t p-4'>
          <button
            onClick={() => dispatch(setShowModal(false))}
            className='w-32 rounded bg-secondary px-4 py-2 text-white hover:bg-gray-700'
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
