import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import { useSelector } from "react-redux";
import Dashboard from "./Dashboard";
import * as userClient from "./Account/client";
import * as coursesClient from "./Courses/client";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number", startDate: "2023-09-10", endDate: "2023-12-15", 
    image: "/images/reactjs.jpeg", description: "New Description"
  });
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchAllCoursesFunc = async () => {
    try {
      const courses = await coursesClient.fetchAllCourses();
      setAllCourses(courses);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchCourses();
    fetchAllCoursesFunc();
  }, [currentUser]);

  const updateCourse = async () => {
    if (course.name.startsWith("@")) {
      return;
    }
    await coursesClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  const addNewCourse = async () => {
    if (course.name.startsWith("@")) {
      return;
    } 
    const newCourse = await userClient.createCourse(course);
    setCourses([...courses, newCourse]);
  };
  const deleteCourse = async (courseId: string) => {
    const status = await coursesClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  return (
    <Session>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="/Kanbas/Dashboard" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={<ProtectedRoute><Dashboard
                                            filteredCourses={courses}
                                            allCourses={allCourses}
                                            course={course}
                                            setCourse={setCourse}
                                            addNewCourse={addNewCourse}
                                            deleteCourse={deleteCourse}
                                            updateCourse={updateCourse}/></ProtectedRoute>} />
          <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
        </div>
      </div>
    </Session>
);}
