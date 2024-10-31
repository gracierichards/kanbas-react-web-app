import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
    assignments: assignments,
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
        if (assignment.title.startsWith("@")) {
            return;
        } 
      const newAssignment: any = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        course: assignment.course,
        dateAvailable: assignment.dateAvailable,
        timeAvailable: assignment.timeAvailable,
        dueDate: assignment.dueDate,
        dueTime: assignment.dueTime,
        points: assignment.points,
        description: assignment.description
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentID }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentID);
    },
    updateAssignment: (state, { payload: assignment }) => {
        if (assignment.title.startsWith("@")) {
            return;
        } 
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    }
  },
});
export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;