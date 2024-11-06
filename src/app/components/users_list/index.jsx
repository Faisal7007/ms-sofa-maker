"use client";
import { removeUsers } from "@/app/services/slices";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
function UsersList() {
  const userData = useSelector((data) => data.example.users);
  const dispatch = useDispatch();
  return (
    <div>
      <div>UsersList</div>
      <ul>
        {userData?.map((data) => {
          return (
            <li key={data.id}>
              <span>{data.name}</span>
              <button
                className=" bg-red-200"
                onClick={() => dispatch(removeUsers(data.id))}
              >
                remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default UsersList;
