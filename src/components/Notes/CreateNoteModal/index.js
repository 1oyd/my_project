import { useContext, useState } from "react";
import { StoreContext } from "../../../store";
import * as types from "../../../store/actions";

import "./main.css";
import {useLocation} from "react-router-dom";

function CreateNoteModal({ handleClose }) {
  const { dispatch } = useContext(StoreContext);

  const [note, setNote] = useState("");
  const folder = useLocation().pathname.match(/([^/]+$)/)[0];
  console.log('CreateNoteModal', { folder });
  const handleClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      handleClose();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: types.CREATE_NOTE,
      payload: {
        folder,
        description: note,
      },
    });
    setNote("");
    handleClose();
  };

  return (
    <div className="createModal" onClick={handleClick}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title w-100">
              <div className="form-group">
                <label>Your note</label>
                <input
                  className="form-control w-100"
                  aria-describedby=""
                  placeholder="Enter your note"
                  value={note}
                  onInput={({ target }) => setNote(target.value)}
                />
                <small className="form-text text-muted">
                  Please write your note here.
                </small>
              </div>
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" onClick={handleClick}>
                &times;
              </span>
            </button>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Add note
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={handleClick}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CreateNoteModal };
