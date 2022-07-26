import React, { useState } from "react";
import Table from "../Parts/Table";
import { getList} from "../firebase";
import OptBar from "../Parts/OptBar";

function Attendance() {
  const [data,setData]=useState([])
  const [batch, setBatch] = useState("");
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");
  const [show,setShow]=useState("")

  async function getNewData(cause,value) {
    if(cause=="batch"){

      setBatch(value);
      const res = await getList(value);
      setData(res)
      console.log(res)
    }else{
      alert("Functionality not available yet")
    }
  }
  

  return (
    <div className="scrollTable">
      <OptBar title="Update Attendance" batch={batch} subject={subject} setFn={(cause,value)=>getNewData(cause, value)} cato=" Attendance" limit={[1,1,1,1]}/>

      <div className="card-body bg-white scrollTable">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll No.</th>
                <th>Current Attendance</th>
                <th>Today Attendance</th>
              </tr>
            </thead>

            <tbody id="student-attendance-table">
              {
                (data.length)?
                  data.map((item)=>{
                    return(
                      <tr>
                        <td>{item.name}</td>
                        <td>{item.roll}</td>
                        <td>{item.totalAttend}</td>
                        <td contentEditable="true" max={1}></td>
                      </tr>
                    )
                  }):(<tr><td className="text-center" colSpan={4}> Choose a Batch</td></tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Attendance;
