import React from 'react';

const Modal = ({ modalRef }) => {
  const handleClose = () => {
    modalRef.current.close()
  }
  return (
    <div>
      <dialog
        ref={modalRef}
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle rounded-[10px]"
      >
        <div className="modal-box space-y-3">
          <h3 className="font-bold text-lg text-neutral">Leaving already?</h3>
          <p className="py-4 text-neutral">
            You can log back in anytime to continue your meetings with Hintro.
          </p>

          <div className=" flex justify-between">
            <button
              onClick={handleClose}
              className="btn py-2 px-[14px] text-neutral border border-neutral/50 rounded-sm"
            >
              Cancel
            </button>
            <button
              onClick={handleClose}
              className="btn btn-neutral py-2 px-6  rounded-sm"
            >
              LogOut
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;