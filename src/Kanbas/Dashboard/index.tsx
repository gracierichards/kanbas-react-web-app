import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpeg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
            <img src="/images/PDP_logo.gif" width={200} />
            <div>
                <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5010/Home">
                CS5010 Programming Design Paradigm
                </Link>
                <p className="wd-dashboard-course-title">
                Java and code design principles
                </p>
                <Link to="/Kanbas/Courses/5010/Home"> Go </Link>
            </div>
        </div>
        <div className="wd-dashboard-course">
        <img src="/images/Database logo.png" width={200} />
            <div>
                <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5200/Home">
                CS5200 Database Management Systems
                </Link>
                <p className="wd-dashboard-course-title">
                ERDs, SQL, and NoSQL
                </p>
                <Link to="/Kanbas/Courses/5200/Home"> Go </Link>
            </div>
        </div>
        <div className="wd-dashboard-course">
        <img src="/images/Unity3d icon.jpg" width={200} />
            <div>
                <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5540/Home">
                CS5540 Game Programming
                </Link>
                <p className="wd-dashboard-course-title">
                Make your own video game using Unity3D and C#
                </p>
                <Link to="/Kanbas/Courses/5540/Home"> Go </Link>
            </div>
        </div>
        <div className="wd-dashboard-course">
        <img src="/images/Algorithms logo.png" width={200} />
            <div>
                <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5800/Home">
                CS5800 Algorithms
                </Link>
                <p className="wd-dashboard-course-title">
                Dynamic programming
                </p>
                <Link to="/Kanbas/Courses/5800/Home"> Go </Link>
            </div>
        </div>
        <div className="wd-dashboard-course">
        <img src="/images/Internet image.jpeg" width={200} />
            <div>
                <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5610/Home">
                CS5610 Web Development
                </Link>
                <p className="wd-dashboard-course-title">
                Everything about web dev!
                </p>
                <Link to="/Kanbas/Courses/5610/Home"> Go </Link>
            </div>
        </div>
        <div className="wd-dashboard-course">
        <img src="/images/Software team image.jpeg" width={200} />
            <div>
                <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5500/Home">
                CS5500 Foundations of Software Engineering
                </Link>
                <p className="wd-dashboard-course-title">
                Programming at the scale of multi-person projects, explored through the software development lifecycle
                </p>
                <Link to="/Kanbas/Courses/5500/Home"> Go </Link>
            </div>
        </div>
      </div>
    </div>
  );
}