"use client";
import { addUsers } from "@/app/services/slices";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
function AddUsers() {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  function userDispatch() {
    dispatch(addUsers(userName));
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        className=" border-2"
      />
      <button onClick={userDispatch}>Add</button>
    </div>
  );
}
export default AddUsers;
