import { useContext } from "react";

import { Button } from "../../Button";
import * as types from "../../../store/actions";

import { StoreContext } from "../../../store";

import "./main.css";

function NotesItems() {
  const { state, dispatch } = useContext(StoreContext);
  const editNote = (note) => {
    dispatch({
      type: types.EDIT_NOTE,
      payload: note,
    });
  };
  const deleteNote = (id) => {
    dispatch({
      type: types.DELETE_NOTE,
      payload: {
        id,
      },
    });
  };
  return (
    <div className="container">
      <ul className="notes__list">
        {state.notes.map((note) => (
          <div
            key={note.id}
            to={`/notes/${note.title}`}
            className="notes__item"
          >
            {note.title}
            <Button className="notes__edit" onClick={editNote}>
              Edit
            </Button>
            <Button className="notes__delete" onClick={deleteNote}>
              Delete
            </Button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export { NotesItems };
