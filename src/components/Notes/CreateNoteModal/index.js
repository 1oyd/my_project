import { useContext, useState, useRef, useEffect } from "react";
import { StoreContext } from "../../../store";
import * as types from "../../../store/actions";

import "./main.css";
import { useLocation } from "react-router-dom";

function CreateNoteModal({ handleClose }) {
  const input = useRef(null);
  const { dispatch } = useContext(StoreContext);

  const [note, setNote] = useState("");

  useEffect(() => {
    input.current.focus();
  }, []);

  const location = useLocation().pathname;
  const folder = location.split("/")[location.split("/").length - 1];
  console.log(location.split("/"));

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
      <form action="" className="postcard" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Note name</label>
          <input
            ref={input}
            type="text"
            placeholder="Enter your note"
            value={note}
            onInput={({ target }) => setNote(target.value)}
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
          <button className="modal-button">Add note</button>
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

export { CreateNoteModal };
