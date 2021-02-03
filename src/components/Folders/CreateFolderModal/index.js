import { useContext, useState } from "react";
import { StoreContext } from "../../../store";
import * as types from "../../../store/actions";

import "./main.css";

function CreateFolderModal({ handleClose }) {
  const { dispatch } = useContext(StoreContext);

  const [folder, setFolder] = useState("");

  const handleClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      handleClose();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: types.CREATE_FOLDER,
      payload: {
        description: folder,
      },
    });
    setFolder("");
    handleClose();
  };

  return (
    <div className="createModal" onClick={handleClick}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title w-100">
              <div className="form-group">
                <label>Folder name</label>
                <input
                  className="form-control w-100"
                  aria-describedby=""
                  placeholder="Enter folder name"
                  value={folder}
                  onInput={({ target }) => setFolder(target.value)}
                />
                <small className="form-text text-muted">
                  Please write your folder name here.
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
              Save changes
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

export { CreateFolderModal };
