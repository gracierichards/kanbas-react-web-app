import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { useDispatch } from "react-redux";
export default function AssignmentControlButtons({id, deleteFunction} : {id: string, deleteFunction : any}) {
  const dispatch = useDispatch();
  return (
    <div className="float-end">
      <FaTrash className="text-danger me-2 mb-1" onClick={() => dispatch(deleteFunction(id))}/>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}