import NavFlat from "./navFlat";
import pic from "./image/back.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Addvisit() {

    useEffect(() => {
        var date1=new Date();
var cdate=date1.getDate();
var month=date1.getMonth()+1;
var year=date1.getFullYear();
if(cdate<10)
{
    cdate="0"+cdate;
}
if(month<10)
{
    month="0"+month;
}
var mindate=year + "-" + month + "-" + cdate;
document.getElementById("dt").setAttribute('min',mindate);
console.log(mindate)

      }, []);
    


    const [date, setdate] = useState("");
    const [timeslot, settimeslot] = useState("");

    const datedhandle = (e) => {
        setdate(e.target.value);
    };

    const timeslotdhandle = (e) => {
        settimeslot(e.target.value);
    };

    const submit = () => {

        axios.post("http://localhost:8080/visitbook/add", {
            visit_Date: date,
            timeSlot: timeslot,
            fVisit: {
                uId: sessionStorage.getItem("usr_id"),
                
                
                },
                consowner: {
                    c_id:sessionStorage.getItem("construct_id")
                }

            }).then(
                Swal.fire({
                    icon: "success",
                    title: "success",
                    text: "Your Visit Request Added Succesfully",})
    
            );
            console.log(sessionStorage.getItem("construct_id"))
    };



    return (
        <div className="container-fluid" style={{
            backgroundImage: `url(${pic})`, backgroundRepeat: "no-repeat", height: "100%",
            backgroundSize: " 100% 100%"
        }}>
            <div className="row">

                <NavFlat></NavFlat>
            </div>
            <div className="row  justify-content-center align-content-center" style={{ height: " 100vh" }}>
                <div className="col-4 p-3" style={{ backgroundColor: 'rgba(233, 192, 13, 0.2)' }}>
                    <div className="text-center">
                        <h2>Book Site Visit:</h2>
                    </div>

                    <form>
                        <label>Select Date</label><br></br>
                        <input className="form-control" id="dt" value={date} onChange={datedhandle} type="date" placeholder="Name" /><br></br>
                        <label>Select Time Slot</label><br></br>
                        <select className="form-select " onChange={timeslotdhandle} aria-label="Default select example">
                            <option selected>10 am to 11 am</option>
                            <option value="11 am to 1 pm">11 am to 1 pm</option>
                            <option value="2 pm to 4 pm">2 pm to 4 pm</option>
                            <option value="5 pm to 6 pm">5 pm to 6 pm</option>

                        </select><br></br>




                        <div className="text-center">
                            <input className="btn btn-dark" type="button" onClick={submit} value="Book Visit" />
                        </div>


                    </form>
                </div>
            </div>
            
        </div>
        

    );
}