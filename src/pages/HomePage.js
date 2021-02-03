import { AppHeader } from "../components/AppHeader";
import { FoldersList } from "../components/Folders/FoldersList";

function HomePage() {
  return (
    <div>
      <AppHeader />
      <FoldersList />
    </div>
  );
}

export { HomePage };
