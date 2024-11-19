import "../../styles.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AssignmentHeaderControlButtons from "./AssignmentHeaderControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import * as coursesClient from "../client";
import { useDispatch } from "react-redux";
import { setAssignments } from "./reducer";

export default function Assignments() {
  const dispatch = useDispatch();
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const fetchAssignments = async () => {
    try {
      const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
      dispatch(setAssignments(assignments));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchAssignments();
  }, []);
  return (
    <div id="wd-assignments" className="m-5">
      <div id="wd-search-assignment-box" className="row">
        <div className="col-8">
          <span>
            <FaMagnifyingGlass/>
          </span>
          <input id="wd-search-assignment" placeholder="Search..." className="form-control" type="text" style={{width: "500px"}}/>
        </div>
        {currentUser.role === "FACULTY" && <div className="col-4">
          <Link to={`/Kanbas/Courses/${cid}/Assignments/@`}>
            <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />Assignment</button></Link>
          <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group
          </button>
        </div>}
      </div>
      <br/><br/>
      <ul className="list-group rounded-0">
        <li className="list-group-item p-0 fs-5 border-gray">
          <div className="wd-assignments-title p-3 ps-3 bg-secondary">
          {currentUser.role === "FACULTY" && <BsGripVertical className="me-2 fs-3" />}
          ASSIGNMENTS{currentUser.role === "FACULTY" && <AssignmentHeaderControlButtons />}</div>
        </li>
        <ul id="wd-assignment-list" className="list-group rounded-0">
        {currentUser.role === "FACULTY" &&
          (assignments.map((assignment : {_id: string,
                                          title: string,
                                          course: string,
                                          dateAvailable: string,
                                          timeAvailable: string,
                                          dueDate: string,
                                          dueTime: string,
                                          points: number,
                                          description: string}) => (
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1 fs-5">
                          <div className="row align-items-center">
                            <div className="col-1">
                              <BsGripVertical className="me-2 fs-3" />
                              <BsPencilSquare className="text-success"/>
                            </div>
                            <div className="col-9">
                              <a className="wd-assignment-link text-decoration-none text-dark"
                                href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                              {assignment.title}</a><br />
                              <span className="fs-6 text-wrap"><span className="text-danger">Multiple Modules</span>
                              <span className="custom-gray1"> | <strong>Not available until
                                </strong> {assignment.dateAvailable} at {assignment.timeAvailable} | <strong>Due
                                </strong> {assignment.dueDate} {assignment.dueTime && 
                                <span>at {assignment.dueTime}</span>} | {assignment.points} pts</span></span>
                            </div>
                            <div className="col-2">
                              <AssignmentControlButtons assignment={assignment}/>
                            </div>
                          </div>
                        </li>
                      )))}
        {currentUser.role !== "FACULTY" &&
          (assignments.map((assignment : {_id: string,
                                          title: string,
                                          course: string,
                                          dateAvailable: string,
                                          timeAvailable: string,
                                          dueDate: string,
                                          dueTime: string,
                                          points: number,
                                          description: string}) => (
                        <li className="wd-assignment-list-item list-group-item p-3 ps-3 fs-5">
                          <div className="row align-items-center">
                            <div className="col-11">
                              <span className="wd-assignment-link text-decoration-none text-dark">
                              {assignment.title}</span><br />
                              <span className="fs-6 text-wrap"><span className="text-danger">Multiple Modules</span>
                              <span className="custom-gray1"> | <strong>Not available until
                                </strong> {assignment.dateAvailable} at {assignment.timeAvailable} | <strong>Due
                                </strong> {assignment.dueDate} {assignment.dueTime && 
                                <span>at {assignment.dueTime}</span>} | {assignment.points} pts</span></span>
                            </div>
                          </div>
                        </li>
                      )))}
        </ul>
      </ul>
    </div>
  );}
  