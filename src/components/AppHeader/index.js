import "./main.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../Button";

import { CreateFolderModal } from "../Folders/CreateFolderModal";

function AppHeader() {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <header className="app-header">
      <nav className="app-header__nav">
        <Link to="/" className="app-header__link">
          <span className="material-icons">pregnant_woman</span>My folders
        </Link>
      </nav>
      <div>
        <Button
          className="app-header__button"
          onClick={() => setModalOpened(!modalOpened)}
        ></Button>
      </div>

      {modalOpened && <CreateFolderModal handleClose={setModalOpened} />}
    </header>
  );
}

export { AppHeader };
