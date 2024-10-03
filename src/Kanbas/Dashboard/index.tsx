import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col d-flex align-items-stretch" style={{ width: "270px"}}>
            <div className="card rounded-3 overflow-hidden w-100">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpeg" width="100%" height={150} alt="React logo"/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1234 React JS</h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
                </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col d-flex align-items-stretch" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden w-100">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
                <img src="/images/PDP_logo.gif" width="100%" height={150} alt="PDP logo"/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS5010 Programming Design Paradigm</h5>
                  <p className="wd-dashboard-course-title card-text">
                  Java and code design principles
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
                </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col d-flex align-items-stretch" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden w-100">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
                <img src="/images/Database logo.png" width="100%" height={150} alt="Commonly used shape used to represent databases"/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS5200 Database Management Systems</h5>
                  <p className="wd-dashboard-course-title card-text">
                  ERDs, SQL, and NoSQL
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
                </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col d-flex align-items-stretch" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden w-100">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
                <img src="/images/Unity3d icon.jpg" width="100%" height={150} alt="Unity icon overlaid over game scenery"/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS5540 Game Programming</h5>
                  <p className="wd-dashboard-course-title card-text">
                  Make your own video game using Unity3D and C#
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
                </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col d-flex align-items-stretch" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden w-100">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
                <img src="/images/Algorithms logo.png" width="100%" height={150} alt="A tree spelling out algorithms"/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS5800 Algorithms</h5>
                  <p className="wd-dashboard-course-title card-text">
                  Dynamic programming
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
                </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col d-flex align-items-stretch" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden w-100">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
                <img src="/images/Internet image.jpeg" width="100%" height={150} alt="The Earth"/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS5610 Web Development</h5>
                  <p className="wd-dashboard-course-title card-text">
                  Everything about web dev!
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
                </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col d-flex align-items-stretch" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden w-100">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
                <img src="/images/Software team image.jpeg" width="100%" height={150} alt="Clipart of three people with laptops working together"/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS5500 Foundations of Software Engineering</h5>
                  <p className="wd-dashboard-course-title card-text">
                  Programming at the scale of multi-person projects, explored through the software development lifecycle
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}