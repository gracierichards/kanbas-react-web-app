export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name" className="form-label"><h6>Assignment Name</h6></label>
        <input id="wd-name" className="form-control" type="text"/><br /><br />
        <p id="wd-description" className="assignment-editor-border px-3 py-2">The assignment is available online<br/>
          Submit a link to the landing page of your Web application running on Netlify.<br/>
          The landing page should include the following:<br/>- Your full name and section<br/>
          - Links to each of the lab assignments<br/>- Link to the Kanbas application<br/>
          - Links to all relevant source code repositories<br/>
          The Kanbas application should include a link to navigate back to the landing page.</p>
        <div className="row justify-content-end">
          <div className="col-2 mb-4">
            <label htmlFor="wd-points" className="form-label float-end">Points</label>
          </div>
          <div className="col-8 mb-4">
            <input id="wd-points" className="form-control"/>
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
              <input type="date" id="wd-due-date" className="input-group date"/><br />
              <div className="row">
                <div className="col mb-4">
                  <label htmlFor="wd-available-from" className="form-label"><strong>Available from</strong></label><br />
                  <input type="date" id="wd-available-from" className="input-group date"/>
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
        <button className="btn btn-lg btn-danger me-1 float-end">
          Save
        </button>
        <button className="btn btn-lg btn-secondary me-1 float-end">
          Cancel
        </button>
      </div>
  );}