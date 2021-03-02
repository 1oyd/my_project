import { useState } from "react";
import { CreateNoteModal } from "../components/Notes/CreateNoteModal";
import { Button } from "../components/Button";
import { NotesList } from "../components/Notes/NotesList";

import "./main.css";

function NotePage() {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div>
      <div className="notes">Notes</div>
      <NotesList />
      <div>
        <Button
          className="notePage__button"
          onClick={() => setModalOpened(!modalOpened)}
        ></Button>
      </div>
      {modalOpened && <CreateNoteModal handleClose={setModalOpened} />}
    </div>
  );
}

export { NotePage };
