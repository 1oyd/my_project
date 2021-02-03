import { nanoid } from "nanoid";
import * as types from "./actions";

function reducer(state, action) {
  switch (action.type) {
    case types.FETCH_FOLDERS: {
      const folders = [...action.payload];

      if (folders.length === 0) {
        folders.push({
          id: "default",
          title: "Test todo...",
          completed: true,
        });
      }

      return {
        ...state,
        folders,
      };
    }

    case types.FETCH_FOLDER: {
      const folders = state.folders !== null ? [...state.folders] : [];
      folders.push(action.payload);

      return {
        ...state,
        folders,
      };
    }

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

    /* case types.FETCH_NOTES: {
      const notes = [...action.payload];

      if (notes.length === 0) {
        notes.push({
          id: "default",
          title: "Test todo...",
          completed: true,
        });
      }

      return {
        ...state,
        notes,
      };
    }

    case types.FETCH_NOTE: {
      const notes = state.notes !== null ? [...state.notes] : [];
      notes.push(action.payload);

      return {
        ...state,
        notes,
      };
    }

    case types.CREATE_NOTE: {
      const notes = [...state.notes];
      const id = nanoid();
      const title = action.payload.description;
      const note = {
        id,
        title,
      };

      notes.push(notes);

      return {
        ...state,
        notes,
        id,
        title,
      };
    }

    case types.DELETE_NOTE: {
      return {
        ...state,
        notes: state.folders.filter((note) => note.id !== action.payload.id),
      };
    } */

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
