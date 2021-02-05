import { useState } from "react";
import { CreateNoteModal } from "../components/Notes/CreateNoteModal";
import { Button } from "../components/Button";
import { NotesList } from "../components/Notes/NotesList";

import "./main.css";

const { AppHeader } = require("../components/AppHeader");

function NotePage() {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div>
      <AppHeader />
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
