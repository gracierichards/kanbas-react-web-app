import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = db.assignments;
  const this_assignment = assignments.find((assignment) => assignment._id == aid);
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name" className="form-label"><h6>Assignment Name</h6></label>
      <input id="wd-name" className="form-control" type="text" value={this_assignment && this_assignment.title}/><br /><br />
      <p id="wd-description" className="assignment-editor-border px-3 py-2">{this_assignment && this_assignment.description && this_assignment.description.split("\n").map((str) => (<div>{str}<br /></div>))}</p>
      <div className="row justify-content-end">
        <div className="col-2 mb-4">
          <label htmlFor="wd-points" className="form-label float-end">Points</label>
        </div>
        <div className="col-8 mb-4">
          <input id="wd-points" className="form-control" value={this_assignment && this_assignment.points}/>
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
              defaultValue={this_assignment && new Date(this_assignment.dueDate + ", 2024").toISOString().slice(0, 10)}/><br />
            <div className="row">
              <div className="col mb-4">
                <label htmlFor="wd-available-from" className="form-label"><strong>Available from</strong></label><br />
                <input type="date" id="wd-available-from" className="input-group date"
                  defaultValue={this_assignment && new Date(this_assignment.dateAvailable + ", 2024").toISOString().slice(0, 10)}/>
              </div>
              <div className="col mb-4">
                <label htmlFor="wd-available-until" className="form-label"><strong>Until</strong></label> <br />
                <input type="date" id="wd-available-until" className="input-group date"/>
              </div>
            </div>
          </p>
        </div>
      </div>
      <hr />
      <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-lg btn-danger me-1 float-end"> Save </Link>
      <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-lg btn-secondary me-1 float-end"> Cancel </Link>
    </div>
  );}