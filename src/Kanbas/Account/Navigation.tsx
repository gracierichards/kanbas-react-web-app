import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((elem) => (<Link to={`/Kanbas/Account/${elem}`} 
        className={`list-group-item ${pathname.includes(elem) ? "active" : "text-danger"} border border-0`}>{elem}</Link>))}
    </div>
);}