import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import * as userClient from "./Account/client";
import * as coursesClient from "./Courses/client";
export default function Dashboard({ course, setCourse}: {
      course: any; setCourse: (course: any) => void}) {

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [enrolling, setEnrolling] = useState<boolean>(false);
  const [courses, setCourses] = useState<any[]>([]);
  const findCoursesForUser = async () => {
    try {
      const courses = await userClient.findCoursesForUser(currentUser._id);
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchCourses = async () => {
    try {
      const allCourses = await coursesClient.fetchAllCourses();
      console.log(allCourses);
      const enrolledCourses = await userClient.findCoursesForUser(
        currentUser._id
      );
      const courses = allCourses.map((course: any) => {
        if (enrolledCourses.find((c: any) => c._id === course._id)) {
          return { ...course, enrolled: true };
        } else {
          return course;
        }
      });
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (enrolling) {
      fetchCourses();
    } else {
      findCoursesForUser();
    }
  }, [currentUser, enrolling]);

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
    const newCourse = await coursesClient.createCourse(course);
    setCourses([...courses, newCourse]);
  };
  const deleteCourse = async (courseId: string) => {
    const status = await coursesClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => {return course && course._id !== courseId}));
  };
  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    console.log("Inside Dashboard.updateEnrollment. courseID is " + courseId + " and enrolled is " + enrolled);
    if (enrolled) {
      console.log("Calling userClient.enrollIntoCourse with currentUser._id = " + currentUser._id);
      await userClient.enrollIntoCourse(currentUser._id, courseId);
    } else {
      console.log("Calling userClient.unenrollFromCourse with currentUser._id = " + currentUser._id);
      await userClient.unenrollFromCourse(currentUser._id, courseId);
    }
    setCourses(
      courses.map((course) => {
        if (course._id === courseId) {
          return { ...course, enrolled: enrolled };
        } else {
          return course;
        }
      })
    );
  };
  //console.log(JSON.stringify(currentUser));
  console.log(courses);
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {currentUser.role === "FACULTY" && (<div><h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={addNewCourse} > Add </button>
      <button className="btn btn-warning float-end me-2"
              onClick={updateCourse} id="wd-update-course-click">
        Update
      </button>
      </h5><br />
      <input value={course.name} className="form-control mb-2" 
        onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <textarea value={course.description} className="form-control" 
        onChange={(e) => setCourse({ ...course, description: e.target.value }) }/>
      <hr /></div>)}

      {currentUser.role === "STUDENT" &&
        <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
          {enrolling ? "My Courses" : "All Courses"}
        </button>}

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((c) => c && (
            <div className="wd-dashboard-course col d-flex align-items-stretch" style={{ width: "270px"}}>
              <div className="card rounded-3 overflow-hidden w-100">
                  <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to={(!c.enrolled && !enrolling) ? `/Kanbas/Courses/${c._id}/Home` : "/Kanbas/Dashboard"}>
                  <img src={`/images/${c.img}`} width="100%" height={150} alt="React logo"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">{c.name}</h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {c.description}
                    </p>
                    {(!enrolling) && <button className="btn btn-primary"> Go </button>}
                    {currentUser.role === "FACULTY" && (<span><button onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(c._id);
                      }}
                      className="btn btn-danger float-end"
                      id="wd-delete-course-click">
                      Delete
                    </button>
                    <button id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(c);
                      }}
                      className="btn btn-warning me-2 float-end" >
                      Edit
                    </button></span>)}
                    {enrolling && (
                    <button className={`btn ${ c.enrolled ? "btn-danger" : "btn-success" } float-end`}
                      onClick={(event) => {
                        event.preventDefault();
                        console.log("Inside enroll button onClick. Calling Dashboard.updateEnrollment");
                        updateEnrollment(c._id, !c.enrolled);
                      }}>
                      {c.enrolled ? "Unenroll" : "Enroll"}
                    </button>
                  )}
                  </div>
                  </Link>
              </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}