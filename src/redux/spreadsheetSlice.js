import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cells: Array(1000).fill(""),
  history: [],
  future: [],
};

const spreadsheetSlice = createSlice({
  name: "spreadsheet",
  initialState,
  reducers: {
    updateCell: (state, action) => {
      const { index, value } = action.payload;
      state.history.push([...state.cells]);
      state.cells[index] = value;
      state.future = [];
    },
    undo: (state) => {
      if (state.history.length > 0) {
        state.future.push([...state.cells]);
        state.cells = state.history.pop();
      }
    },
    redo: (state) => {
      if (state.future.length > 0) {
        state.history.push([...state.cells]);
        state.cells = state.future.pop();
      }
    },
  },
});

export const { updateCell, undo, redo } = spreadsheetSlice.actions;
export default spreadsheetSlice.reducer;
