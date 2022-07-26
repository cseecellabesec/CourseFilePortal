import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile
} from "firebase/auth";

import { getDatabase } from "firebase/database";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCQlvn4x-fNGEn4hXSV88xSeEWwB02D-MU",

  authDomain: "course-file-portal-abesec.firebaseapp.com",

  databaseURL: "https://course-file-portal-abesec-default-rtdb.firebaseio.com",

  projectId: "course-file-portal-abesec",

  storageBucket: "course-file-portal-abesec.appspot.com",

  messagingSenderId: "638158463001",

  appId: "1:638158463001:web:ba4fe335aa288863f0ca88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const auth = getAuth();
const loginUser = (email, password) => {
  if (email != "" && password != "") {
    // setBtnText("Checking...");

    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        onAuthStateChanged(auth, (user) => {
          alert(user.displayName);
          if (user.photoURL == "1234") {
            location.replace("/user");
          } else {
            if (user.emailVerified) {
              location.replace("/user");
            } else {
              //Send verification email
              sendEmailVerification(auth.currentUser)
                .then(() => {
                  alert("Mail has been sent,Verify Your Account");
                })
                .catch((error) => {
                  alert(error.message);
                });
            }
          }
        });
      })
      .catch((error) => {
        alert("User Not Found");
      });
  } else {
    alert("Enter Valid Email & Password");
  }
};

// SignUp Function
const signUser = (Name, email, password, userId) => {
  if (Name != "" && userId != "" && email != "" && password != "") {
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        // Send verification email
        sendEmailVerification(auth.currentUser)
          .then(() => {
            alert("Please Verify Email Id");
          })
          .catch((error) => {
            alert("Some Error Occured ! Try Again");
          });
        // Update User Profile
        updateProfile(auth.currentUser,{
            displayName: Name,
            photoURL: userId,
          })
          .then(() => {
            alert("Account Created Successfully");
          })
          .catch(function (error) {
            alert(error.message);
          });
        // Update User Data
        set(
          ref("Users/" + userId).set({
            Name: Name,
            uid: userId,
            email: email,
            password: password,
          })
        );

        // Form.reset();
      })
      .catch((error) => {
        alert(error.message);
      });
  } else {
    alert("Details can't be Empty");
  }
};

const signOutUser = () => {
  signOut(auth)
    .then(() => {
      location.replace("/user");
    })
    .catch(() => {
      alert("Some Error Occured");
    });
};

// Forget Mail Form

const forgotPass = (email) => {
  if (email != "") {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password Reset Mail Send Successfully");
      })
      .catch((error) => {
        alert(error.message);
      });
  } else {
    alert("Enter a Email Id");
  }
};



const db = getFirestore(app);
var k = [],
  l = [];
const uploadList = (nameList, rollList, batchName) => {
  if (nameList != "" && rollList != "" && batchName != "") {
    k = nameList.split("\n");
    l = rollList.split("\n");
    alert("Abc");
    var data=[]

    for (var i = 0; i < k.length; i++) {
      data.push({name:k[i],roll:l[i]})
    }
    console.log(data)
    setDoc(doc(db, "student-list", batchName), {
      data:data,
    })
      .then((docRef) => {
        alert("Success");
      })
      .catch(() => {
        alert("Any error occured");
      });
  } else {
    alert("Fill Data Properly");
  }
};

var responseData=[]
async function getList(batchName){
  if (batchName != "") {
    alert(batchName);
    const docRef = doc(db, "student-list", batchName);
    await getDoc(docRef).then((docSnapp) => {
      if (docSnapp.exists() && docSnapp.data().length!=0) {
        alert("success")
        responseData=docSnapp.data().data;
      } else {
        responseData=[]
        alert("No Data Found");
      }
    });
    console.log("FLAG",responseData)
    return responseData
  } else {
    alert("Invalid Batch Selected");
  }
};



export {
  db,
  auth,
  responseData,
  loginUser,
  forgotPass,
  signUser,
  signOutUser,
  uploadList,
  getList,
};
