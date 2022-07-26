import React, { useEffect, useState } from "react";
import Footer from "../Parts/Footer";
import LogOutModal from "../Parts/LogOutModal";
import Sidebar from "../Parts/Sidebar";
import Topbar from "../Parts/Topbar";
import { auth,db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getDoc,doc } from "firebase/firestore";
function UserDash(props) {
  const [userName, setUserName] = useState("");
  const [updates,setUpdate]=useState([])
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        location.replace("/");
      }
      var NameofUser = user.photoURL;
      setUserName(NameofUser);
      const docRef = doc(db, "updates", NameofUser);
      await getDoc(docRef).then((docSnapp) => {
        if (docSnapp.exists() && docSnapp.data().length != 0) {
          setUpdate(docSnapp.data().notify);
        }
      });

    });
  },[""]);

  return (
    <div>
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar name={userName} update={updates} />

            <div className="container-fluid">{props.Elem}</div>
          </div>

          <Footer />
        </div>
      </div>

      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

      <LogOutModal />
    </div>
  );
}

export default UserDash;
