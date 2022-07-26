var k = [];
var l = [];
var table = document.getElementById("student-attendance-table");
const db = firebase.firestore();

db.collection("abesec-cse-department").doc('student-data').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().studentNames}`);
        for(var i=0;i<doc.data().studentNames.length;i++){

            table.innerHTML+=`
            
            <tr>
                <td>${doc.data().studentNames[i]}</td>
                <td>${doc.data().studentRolls[i]}</td>
                <td>${doc.data().studentAttendance[i]}</td>
                 <td ><input onchange="setAttendance()" id="todayAttendance${i}" class="tableInput" /></td>
            </tr>
            `
        }
    });
});


let totalMarksi=0
let rowCount=0
function totalMarks(marksValue,count){
    if(count!=rowCount){
        totalMarksi=0
        rowCount=count;
    }

    let attendDate=document.getElementById('attendance-date-input').value

    db.collection("student-list").doc(document.getElementById('studentBatchName').innerHTML)
      .set({
        attendance:[...attendance,attendDate]
      })
      .then((docRef) => {
        console.log("Success")
      });

    let value=Number(marksValue)
    totalMarksi+=value
    document.getElementById(`totalMarks${count}`).innerHTML=Number(totalMarksi)

}


function showNames() {
  const db = firebase.firestore();
  const btn = document.getElementById("student-list-submit-btn");

  alert("exec");
  btn.innerHTML = '<i className="fa fa-spinner fa-spin"></i>';
  const names = document.getElementById("student-name-area");
  const rolls = document.getElementById("student-roll-area");

  var a = names.value;
  var b = rolls.value;

  k = a.split("\n");
  l = b.split("\n");

  for (var i = 0; i < k.length; k++) {
    db.collection("student-list").doc(document.getElementById('studentBatchName').innerHTML)
      .set({
        studentNames: k,
        studentRolls: l,
        attendance:[],
        marks:{}
      })
      .then((docRef) => {
        console.log("Success");
        alert("Success");
        btn.innerHTML = "Submit Student Data";
      });
  }
}



