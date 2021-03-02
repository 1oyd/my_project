import { useContext, useEffect, useRef, useState } from "react";
import { StoreContext } from "../../../store";
import * as types from "../../../store/actions";

import "./main.css";

function CreateFolderModal({ handleClose }) {
  const input = useRef(null);
  const { dispatch } = useContext(StoreContext);

  const [folder, setFolder] = useState("");

  useEffect(() => {
    input.current.focus();
  }, []);

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
      <form action="" className="postcard" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Folder name</label>
          <input
            ref={input}
            type="text"
            placeholder="Enter folder name"
            value={folder}
            onInput={({ target }) => setFolder(target.value)}
          />
        </div>

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

        <div>
          <button className="modal-button">Add folder</button>
          <button
            type="button"
            className="modal-button"
            data-dismiss="modal"
            onClick={handleClick}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export { CreateFolderModal };
