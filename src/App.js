import React from "react";
import "./App.css";
import { ResetStyle, GlobalStyle } from "./components/globalStyle";
import Drag from "./components/DragableCalculator";
import OpenModal from "./components/OpenModal";

import { useSelector, useDispatch } from "react-redux";
import { openModal } from "./actions";

function App() {
  const dispatch = useDispatch();
  const isMoalOpen = useSelector((state) => state.modal.isModalOpen);
  return (
    <div className="App">
      <ResetStyle />
      <GlobalStyle />
      <div className="conatiner">
        {!isMoalOpen ? (
          <OpenModal onClick={() => dispatch(openModal())} />
        ) : (
          <Drag />
        )}
      </div>
    </div>
  );
}

export default App;
