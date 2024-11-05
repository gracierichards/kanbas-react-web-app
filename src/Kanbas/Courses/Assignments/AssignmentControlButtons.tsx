import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";
import DeleteAssignmentConfirmation from "./DeleteAssignmentConfirmation";
export default function AssignmentControlButtons({ assignment } : { assignment: any }) {
  //console.log(assignment);
  return (
    <div className="float-end">
      <FaTrash className="text-danger me-2 mb-1" data-bs-toggle="modal" data-bs-target={`#wd-delete-assignment-${assignment._id}`}/>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      <DeleteAssignmentConfirmation dialogTitle="Delete Assignment" assignment={assignment}/>
    </div>
);}