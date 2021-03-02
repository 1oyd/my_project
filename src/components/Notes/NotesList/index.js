import { useContext } from "react";
import { /* Link */ useLocation } from "react-router-dom";
import { Button } from "../../Button";
import * as types from "../../../store/actions";
import { Checkbox } from "../../Checkbox";
import { StoreContext } from "../../../store";

import "./main.css";

function NotesList() {
  const { state, dispatch } = useContext(StoreContext);

  const location = useLocation().pathname;
  const folder = location.split("/")[location.split("/").length - 1];

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
        {state.notes
          .filter((note) => note.folder === folder)
          .map((note) => (
            <div>
              <div
                key={note.id}
                to={`/notes/${note.title}`}
                className="notes__item"
              >
                <div className="notes__body">
                  <Checkbox
                    className="note__is-completed"
                    checked={note.completed}
                  >
                    <span
                      className={`notes__description ${
                        note.completed && "notes__description--completed"
                      }`}
                    >
                      {note.title}
                    </span>
                  </Checkbox>
                </div>

                <div className="notes__actions">
                  <Button
                    className="notes__edit"
                    onClick={() => editNote(note?.id)}
                  ></Button>

                  <Button
                    className="notes__delete"
                    onClick={() => deleteNote(note.id)}
                  ></Button>
                </div>
              </div>
            </div>
          ))}
      </ul>
    </div>
  );
}

export { NotesList };
