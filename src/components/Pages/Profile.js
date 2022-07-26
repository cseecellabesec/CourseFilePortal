import React, { useState, useEffect } from "react";
import { getDatabase, ref, child, get } from "firebase/database";

function Profile(props) {
  const [userObj, setUserName] = useState({});
  useEffect(() => {
    const dbRef = ref(getDatabase());
    const id=document.getElementById('loggedUserId').innerHTML
    get(child(dbRef, `Users/${id}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUserName(snapshot.val())
          console.log(snapshot.val())
          
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    // setUserName({});
  });
  return (
    <div className="container">
      <div className="d-flex">
        <div className="col-3">
          <div className="text-center">
            <img src="../assets/img/logo.png" alt="" className="w-75 my-2" />
          </div>
        </div>
        <div className="col-9 ">
          <div className="col-12 bg-white shadow rounded p-2 ">
            <div className="p-2 bg-light d-flex justify-content-between">
              <h5 className="my-auto">Basic Details</h5>
              <button className="btn btn-sm btn-primary">
                <i className="fa fa-pen mx-1"></i> Edit Profile
              </button>
            </div>
            <div className="d-flex">
              <ul className="col-6 ls-none">
                <li className="my-2">Name</li>
                <li className="my-2">Department</li>
                <li className="my-2">Joined On</li>
                <li className="my-2">E-mail</li>
                <li className="my-2">userId</li>
              </ul>
              <ul className="col-6 ls-none">
                <li className="my-2">{userObj.Name}</li>
                <li className="my-2">{userObj.dept}</li>
                <li className="my-2">{userObj.jDate}</li>
                <li className="my-2">{userObj.email}</li>
                <li className="my-2">{userObj.userId}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
