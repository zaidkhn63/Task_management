import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    setTasks: (state, action) => action.payload,
    addTask: (state, action) => {
      state.push(action.payload);
    },
    updateTaskStatus: (state, action) => {
      const task = state.find((task) => task.id === action.payload.id);
      if (task) task.status = action.payload.status;
    },
  },
});

export const { setTasks, addTask, updateTaskStatus } = taskSlice.actions;
export default taskSlice.reducer;
