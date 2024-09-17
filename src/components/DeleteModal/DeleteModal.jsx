import React, { useState } from "react";
import "./DeleteModal.css";

const DeleteModal = ({ setDeleteModal }) => {
  const [show, setShow] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState("");
  console.log(delectConfirm);

  const deleteModal = () => {
    if (deleteConfirm == "DELETE") {
      setShow(false);
    } else {
      setShow(true);
    }

    // return setShow
  };
  return (
    <div className="deleteModalBody">
      <div className="deleteModalWrapper">
        <div className="deleteModLHead">
          <div>Delete Account</div>
          <span
            className="deleteCancleBtn"
            onClick={() => setDeleteModal(false)}
          >
            X
          </span>
        </div>
        <div>
          Are you want to delete the account linked to your example@gmail.com.
          You will not be able to undo.
        </div>
        <div>To confirm this, type "DELETE"</div>
        <div className="deleteInputBox">
          <input
            type="text"
            onChange={(e) => setDeleteConfirm(e.target.value)}
          />
          <button onClick={delect}>DELETE</button>
        </div>
        {show ? (
          <div className="delectErrMessage">
            Text must match what is specified
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DeleteModal;
