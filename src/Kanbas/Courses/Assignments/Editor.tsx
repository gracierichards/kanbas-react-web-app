import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {addAssignment, updateAssignment} from "./reducer";
import { Link, useNavigate, useLocation } from "react-router-dom";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function AssignmentEditor() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { cid, aid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  let this_assignment = assignments.find((assignment : {_id: string}) => assignment._id === aid);
  if (!this_assignment) {
    this_assignment = {
      _id: "",
      title: "",
      course: cid,
      dateAvailable: "",
      timeAvailable: "",
      dueDate: "",
      dueTime: "",
      points: 0,
      description: ""
    }
  }
  const createAssignmentForCourse = async () => {
    if (!cid) return;
    const newAssignment = await coursesClient.createAssignmentForCourse(cid, this_assignment);
    dispatch(addAssignment(newAssignment));
  };
  const updateAssignmentHandler = async (assignment: any) => {
    await assignmentsClient.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name" className="form-label"><h6>Assignment Name</h6></label>
      <input id="wd-name" className="form-control" type="text" defaultValue={this_assignment && this_assignment.title}
        onChange={(e) => (this_assignment = {...this_assignment, title: e.target.value})}/><br />
      <textarea id="wd-description" className="form-control" rows={10}
        defaultValue={this_assignment && this_assignment.description}
        onChange={(e) => this_assignment = {...this_assignment, description: e.target.value}}/><br />
      <div className="row justify-content-end">
        <div className="col-2 mb-4">
          <label htmlFor="wd-points" className="form-label float-end">Points</label>
        </div>
        <div className="col-8 mb-4">
          <input id="wd-points" className="form-control" defaultValue={this_assignment && this_assignment.points} 
          type="number" onChange={(e) => this_assignment = {...this_assignment, points: +e.target.value}}/>
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="col-2 mb-4">
          <label htmlFor="wd-group" className="form-label float-end">Assignment Group</label>
        </div>
        <div className="col-8 mb-4">
          <select id="wd-group" className="form-select">
            <option selected>ASSIGNMENTS</option>
            <option>QUIZZES</option>
            <option>EXAMS</option>
            <option>PROJECT</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="col-2 mb-4">
          <label htmlFor="wd-display-grade-as" className="form-label float-end">Display Grade as</label>
        </div>
        <div className="col-8 mb-4">
          <select id="wd-display-grade-as" className="form-select">
            <option selected>Percentage</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="col-2 mb-4">
        <label htmlFor="wd-submission-type" className="form-label float-end">Submission Type</label>
        </div>
        <div className="col-8 mb-4">
          <p className="assignment-editor-border px-3 py-2">
            <select id="wd-submission-type" className="form-select">
              <option selected>Online</option>
            </select>
            <br />
            <strong>Online Entry Options</strong>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="online-entry-options" id="wd-checkbox-text-entry"/>
              <label htmlFor="wd-checkbox-text-entry" className="form-check-label">Text Entry</label><br/>
              <input className="form-check-input" type="checkbox" name="online-entry-options" id="wd-checkbox-website-url"/>
              <label htmlFor="wd-checkbox-website-url" className="form-check-label">Website URL</label><br/>
              <input className="form-check-input" type="checkbox" name="online-entry-options" id="wd-checkbox-media-recordings"/>
              <label htmlFor="wd-checkbox-media-recordings" className="form-check-label">Media Recordings</label><br/>
              <input className="form-check-input" type="checkbox" name="online-entry-options" id="wd-checkbox-student-annotation"/>
              <label htmlFor="wd-checkbox-student-annotation" className="form-check-label">Student Annotation</label><br/>
              <input className="form-check-input" type="checkbox" name="online-entry-options" id="wd-checkbox-file-upload"/>
              <label htmlFor="wd-checkbox-file-upload" className="form-check-label">File Uploads</label><br/>
            </div>
          </p>
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="col-2">
        <label htmlFor="wd-assign" className="form-label float-end">Assign</label>
        </div>
        <div className="col-8">
          <p className="assignment-editor-border px-3 py-2">
            <label htmlFor="wd-assign" className="form-label"><strong>Assign to</strong></label> <br />
            <input id="wd-assign" value="Everyone" className="form-control"/><br />
            <label htmlFor="wd-due-date" className="form-label"><strong>Due</strong></label> <br />
            <input type="date" id="wd-due-date" className="input-group date" 
              defaultValue={this_assignment && 
                (this_assignment.dueDate.includes('-') ? this_assignment.dueDate : 
                new Date(this_assignment.dueDate + ", 2024").toISOString().slice(0, 10)) }
              onChange={(e) => {
                console.log(e.target.value);
                this_assignment = {...this_assignment, dueDate: e.target.value}}}/><br />
            <div className="row">
              <div className="col mb-4">
                <label htmlFor="wd-available-from" className="form-label"><strong>Available from</strong></label><br />
                <input type="date" id="wd-available-from" className="input-group date"
                  defaultValue={this_assignment && 
                    (this_assignment.dateAvailable.includes('-') ? this_assignment.dateAvailable : 
                    new Date(this_assignment.dateAvailable + ", 2024").toISOString().slice(0, 10))}
                  onChange={(e) => this_assignment = {...this_assignment, dateAvailable: e.target.value}}/>
              </div>
              <div className="col mb-4">
                <label htmlFor="wd-available-until" className="form-label"><strong>Until</strong></label> <br />
                <input type="date" id="wd-available-until" className="input-group date"
                defaultValue={this_assignment && this_assignment.availableUntil && this_assignment.availableUntil}
                onChange={(e) => {
                  console.log(e.target.value);
                  this_assignment = {...this_assignment, availableUntil: e.target.value}}}/>
              </div>
            </div>
          </p>
        </div>
      </div>
      <hr />
      <button className="btn btn-lg btn-danger me-1 float-end"
        onClick={() => {
          if (pathname.includes("/@")) {
            createAssignmentForCourse();
          } else {
            updateAssignmentHandler(this_assignment);
          }
          navigate(`/Kanbas/Courses/${cid}/Assignments`);
        }}>Save</button>
      <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-lg btn-secondary me-1 float-end"> Cancel </Link>
    </div>
  );}