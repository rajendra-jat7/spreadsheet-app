import React from "react";
import { useDispatch } from "react-redux";
import { undo, redo } from "../redux/spreadsheetSlice";

const Toolbar = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex space-x-2 mb-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => dispatch(undo())}
      >
        Undo
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => dispatch(redo())}
      >
        Redo
      </button>
    </div>
  );
};

export default Toolbar;
