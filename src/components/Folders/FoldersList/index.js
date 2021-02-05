import {Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../../store";

import "./main.css";

function FoldersList() {
  const { state } = useContext(StoreContext);

  return (
    <div className="container">
      <ul className="folders__list">
        {state.folders.map((folder) => (
          <Link
            key={folder.id}
            to={`/folders/${folder.title}`}
            className="folders__link"
          >
            {/* <span className="material-icons">folder</span> */}
            <span className="folders__link--icon"></span>
            {folder.title}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export { FoldersList };
