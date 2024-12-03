import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import * as coursesClient from "./client";
import { useEffect, useState } from "react";

export default function Courses({ courses }: { courses: any[]; }) {
    const { cid } = useParams();
    const [course, setCourse] = useState<any>();
    const [students, setStudents] = useState<any>([]);
    useEffect(() => {
        const fetchCourse = async () => {
          try {
            const course = await coursesClient.findCourse(cid as string);
            setCourse(course);
          } catch (error) {
            console.error(error);
          }
        };
        const getUsers = async () => {
          try {
            const students = await coursesClient.findUsersForCourse(cid as string);
            setStudents(students);
          } catch (error) {
            console.error(error);
          }
        }
    
        fetchCourse();
        getUsers();
      }, [cid]);

    const { pathname } = useLocation();

    return (
        <div id="wd-courses">
            <h2 className="text-danger">
            <FaAlignJustify className="me-4 fs-4 mb-1" />{course && course.name} &gt; {pathname.split("/")[4]}</h2>
            <hr />
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CoursesNavigation />
                </div>
                <div className="flex-fill">
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Modules" element={<Modules />} />
                    <Route path="Assignments" element={<Assignments />} />
                    <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                    <Route path="People" element={<PeopleTable users={students}/>} />
                </Routes>
                </div>
            </div>
        </div>
  );}
  