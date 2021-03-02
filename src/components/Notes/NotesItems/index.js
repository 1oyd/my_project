import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../../Button";
import * as types from "../../../store/actions";

import { StoreContext } from "../../../store";

import "./main.css";

function NotesItems() {
  const { state, dispatch } = useContext(StoreContext);

  const location = useLocation().pathname;
  const note = location.split("/")[location.split("/").length - 1];
  /* const editNote = (note) => {
    dispatch({
      type: types.EDIT_NOTE,
      payload: note,
    });
  };
   */
  const deleteNote = (id, ...args) => {
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
        {state.notes
          .filter((notesitem) => notesitem.note === note)
          .map((notesitem) => (
            <div
              key={notesitem.id}
              to={`/notes/${notesitem.title}`}
              className="notes__item"
            >
              {notesitem.title}
              {/* <Button className="notes__edit" onClick={editNote}>
              Edit
            </Button>
            */}
              <Button
                className="notes__delete"
                onClick={() => deleteNote(notesitem?.id)}
              >
                Delete
              </Button>
            </div>
          ))}
      </ul>
    </div>
  );
}

export { NotesItems };
