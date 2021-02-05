import { useState } from "react";
import { CreateNoteModal } from "../components/Notes/CreateNoteModal";
import { Button } from "../components/Button";
import { NotesItems } from "../components/Notes/NotesItems";

import "./main.css";

const { AppHeader } = require("../components/AppHeader");

function NoteItemPage() {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div>
      <AppHeader />
      <NotesItems />
      <div>
        <Button
          className="noteItemPage__button"
          onClick={() => setModalOpened(!modalOpened)}
        ></Button>
      </div>
      {modalOpened && <CreateNoteModal handleClose={setModalOpened} />}
    </div>
  );
}

export { NoteItemPage };
