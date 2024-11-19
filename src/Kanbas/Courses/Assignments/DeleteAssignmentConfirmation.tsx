import { deleteAssignment } from "./reducer";
import { useDispatch } from "react-redux";
import * as assignmentClient from "./client"
export default function DeleteAssignmentConfirmation({ dialogTitle, assignment }:
    { dialogTitle: string; assignment : any}) {
      const dispatch = useDispatch();
      const removeAssignment = async (assignment : {_id : string}) => {
        await assignmentClient.deleteAssignment(assignment._id);
        dispatch(deleteAssignment(assignment));
      };    
      return (
        <div id={`wd-delete-assignment-${assignment._id}`} className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  {dialogTitle} </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete assignment {assignment.title}?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Cancel </button>
                <button onClick={() => {removeAssignment(assignment)}} type="button" data-bs-dismiss="modal"
                                        className="btn btn-danger">
                  Yes </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    