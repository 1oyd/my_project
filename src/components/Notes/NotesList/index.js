import { Link } from "react-router-dom";
import { useContext } from "react";

import { StoreContext } from "../../../store";

function NotesList() {
  const { state } = useContext(StoreContext);
  return (
    <div className="container">
      <ul className="notes__item">
        {state.notes.map((note) => (
          <div key={note.id} to={`/notes/${note.title}`}>
            {note.title}
          </div>
        ))}
      </ul>
    </div>
  );
}

export { NotesList };
