import { useReducer } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { StoreContext } from "./store";
import { HomePage } from "./pages/HomePage";
import { reducer } from "./store/reducer";
import { initialState } from "./store/state";
import { NotePage } from "./pages/NotePage";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ dispatch, state }}>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/folders/:id" component={NotePage} />
      </Router>
    </StoreContext.Provider>
  );
}

export { App };
