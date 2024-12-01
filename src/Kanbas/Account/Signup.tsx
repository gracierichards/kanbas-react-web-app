import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
export default function Signup() {
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = async () => {
    console.log("Entered signup function in Signup React component. Calling client side's client.signup(user)")
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    navigate("/Kanbas/Account/Profile");
  };
  return (
    <div id="wd-signup-screen">
      <h2>Sign up</h2>
      <input value={user.username} onChange={(e) => {console.log("Setting username to " + e.target.value);
                                                    setUser({ ...user, username: e.target.value });
                                                    console.log("User object is now " + JSON.stringify(user, null, 2))}}
             className="wd-username form-control mb-2" placeholder="username" />
      <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} type="password"
             className="wd-password form-control mb-2" placeholder="password" />
      <button onClick={signup} className="wd-signup-btn btn btn-primary mb-2 w-100"> Sign up </button><br />
    </div>
);}
