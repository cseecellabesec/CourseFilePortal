import React,{useState} from "react";
import { getList} from "../firebase";
import OptBar from "../Parts/OptBar";
function Marks() {
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
    <div>
      <OptBar title="Update Marks" batch={batch} subject={subject} setFn={(cause,value)=>getNewData(cause, value)} cato=" Marks" limit={[1,1,0,1]}/>

      <div className="card-body scrollTable">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th >Name</th>
                  <th >Roll No.</th>
                  <th>PUE Marks</th>
                  <th>Sessional Marks</th>
                  <th>Assignment Marks</th>
                  <th>Internal(Total)</th>
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
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td ></td>
                      </tr>
                    )
                  }):(<tr><td className="text-center" colSpan={6}> Choose a Batch</td></tr>)
              }
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
}

export default Marks;
