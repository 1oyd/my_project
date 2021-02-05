import { useContext } from "react";
import {Link, useLocation} from "react-router-dom";
/* import { Button } from "../../Button";
import * as types from "../../../store/actions"; */

import { StoreContext } from "../../../store";

import "./main.css";

function NotesList() {
  const { state /* dispatch */ } = useContext(StoreContext);

    let folder = useLocation().pathname.match(/([^/]+$)/)[0];
  /* const editNote = (note) => {
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
  }; */
  return (
    <div className="container">
      <ul className="notes__list">
        {state.notes.filter(note => note.folder === folder).map((note) => (
          <Link
            key={note.id}
            to={`/notes/${note.title}`}
            className="notes__item"
          >
            {note.title}
            {/* <Button className="notes__edit" onClick={editNote}>
              Edit
            </Button>
            <Button className="notes__delete" onClick={deleteNote}>
              Delete
            </Button> */}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export { NotesList };
