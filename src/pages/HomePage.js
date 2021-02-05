import { AppHeader } from "../components/AppHeader";
import { useState } from "react";
import { FoldersList } from "../components/Folders/FoldersList";
import { Button } from "../components/Button";

import { CreateFolderModal } from "../components/Folders/CreateFolderModal";

function HomePage() {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div>
      <AppHeader />
      <FoldersList />

      <div>
        <Button
          className="app-header__button"
          onClick={() => setModalOpened(!modalOpened)}
        ></Button>
      </div>
      {modalOpened && <CreateFolderModal handleClose={setModalOpened} />}
    </div>
  );
}

export { HomePage };
