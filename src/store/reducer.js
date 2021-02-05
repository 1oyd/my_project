import { nanoid } from "nanoid";
import * as types from "./actions";

function reducer(state, action) {
  switch (action.type) {
    case types.CREATE_FOLDER: {
      const folders = [...state.folders];
      const id = nanoid();
      const title = action.payload.description;
      const folder = {
        id,
        title,
      };

      folders.push(folder);

      return {
        ...state,
        folders,
        id,
        title,
      };
    }

    case types.DELETE_FOLDER: {
      return {
        ...state,
        folders: state.folders.filter(
          (folder) => folder.id !== action.payload.id
        ),
      };
    }

    case types.CREATE_NOTE: {
      const id = nanoid();
      const title = action.payload.description;
      const note = {
        id,
        title,
      };

      return {
        ...state,
        notes: [note, ...state.notes],
      };
    }

    case types.EDIT_NOTE: {
      const { id, ...note } = action.payload;
      const notes = [...state.notes];
      const position = notes.findIndex((item) => item.id === id);

      let currentNote = notes[position];
      if (currentNote.id === "default") {
        currentNote.id = nanoid();
      }

      currentNote = {
        ...currentNote,
        ...note,
      };

      notes[position] = currentNote;

      return {
        ...state,
        notes,
      };
    }

    case types.DELETE_NOTE: {
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };
    }

    default: {
      return state;
    }
  }
}
function commentsReducer(state, action) {
  switch (action.type) {
    case types.ADD_COMMENT: {
      const comments = [...state.comments];
      const id = nanoid();
      const comment = {
        id,
        ...action.payload,
      };

      comments.push(comment);

      return {
        ...state,
        comments,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}

function userReducer(state) {
  return state;
}

export { reducer, commentsReducer, userReducer };
