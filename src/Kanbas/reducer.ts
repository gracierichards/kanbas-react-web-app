import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "./Database";
const initialState = {
  enrollments: enrollments,
  nextID: 10
};
const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    //action.payload = {classToUnenroll, student}
    unenroll: (state, action : {payload: {classToUnenroll: any, student:any}}) => {
      //console.log(action.payload.classToUnenroll._id);
      //console.log(action.payload.student._id);
      console.log(state.enrollments);
      state.enrollments = state.enrollments.filter((enrollment) => 
        !(enrollment.course === action.payload.classToUnenroll._id && enrollment.user === action.payload.student._id));
      console.log(state.enrollments);
    },
    enroll: (state, action : {payload: {classToEnroll: any, student:any}}) => {
      state.enrollments = [...state.enrollments, 
        {_id: state.nextID+"", user:action.payload.student._id, course:action.payload.classToEnroll._id}];
      state.nextID++;
    }
  },
});
export const { unenroll, enroll } = dashboardSlice.actions;
export default dashboardSlice.reducer;