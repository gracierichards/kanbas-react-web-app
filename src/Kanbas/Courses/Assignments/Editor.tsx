export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br /> <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
              <br /> <br />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option selected>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
                <option>PROJECT</option>
              </select>
              <br /> <br />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option selected>Percentage</option>
              </select>
              <br /> <br />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option selected>Online</option>
              </select>
              <br /> <br />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
            </td>
            <td>
              Online Entry Options<br/>
              <input type="checkbox" name="online-entry-options" id="wd-checkbox-text-entry"/>
              <label htmlFor="wd-checkbox-text-entry">Text Entry</label><br/>

              <input type="checkbox" name="online-entry-options" id="wd-checkbox-website-url"/>
              <label htmlFor="wd-checkbox-website-url">Website URL</label><br/>

              <input type="checkbox" name="online-entry-options" id="wd-checkbox-media-recordings"/>
              <label htmlFor="wd-checkbox-media-recordings">Media Recordings</label><br/>

              <input type="checkbox" name="online-entry-options" id="wd-checkbox-student-annotation"/>
              <label htmlFor="wd-checkbox-student-annotation">Student Annotation</label><br/>

              <input type="checkbox" name="online-entry-options" id="wd-checkbox-file-upload"/>
              <label htmlFor="wd-checkbox-file-upload">File Uploads</label><br/>
              <br />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign">Assign</label>
            </td>
            <td>
              <label htmlFor="wd-assign">Assign to</label> <br />
              <input id="wd-assign" value="Everyone" />
              <br /> <br />
              <label htmlFor="wd-due-date">Due</label> <br />
              <input type="date" id="wd-due-date" />
              <br /> <br />
              <label htmlFor="wd-available-from">Available from</label> <br />
              <input type="date" id="wd-available-from" /> <br />
              <label htmlFor="wd-available-until">Until</label> <br />
              <input type="date" id="wd-available-until" />
              <br /> <br />
            </td>
          </tr>
          <tr>
            <td>
            </td>
            <td align="right" valign="top">
              <button>Cancel</button> <button>Save</button>
            </td>
          </tr>
        </table>
      </div>
  );}