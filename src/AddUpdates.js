import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Swal from "sweetalert2";

export default function AddUpdates() {
  const [progressDetails, setDetails] = useState("");
  const [updationDate, setUpdationDate] = useState("");

  let [image, setImage] = useState(null);


  function isValid()
  {
    var temp=true;
    var domdetails=document.getElementById("details");
    console.log("inside function")
    if (domdetails== "") {
      document.getElementById("details1").innerHTML =
        " ** Please fill Details ";
        temp=false;
        
    }
    else
    {
      document.getElementById("details1").innerHTML =
      "";
    }


    if(temp==false)
          {
            console.log(temp);
            return;
          }
          else{
            AddData();
    
            document.getElementById("details").value="";
           
            
           
  
          }
  }

  async function AddData() {
    let form = new FormData();
    form.append("id",sessionStorage.getItem("C_id"));

    console.log(image);

    form.append("img", image);

    form.append("details", progressDetails);

    form.append("UpdateDate", updationDate);

    await axios.post(" http://localhost:8080/construction/update", form, {
      headers: {
        "Content-Type": "multipart/form-data",
       
      },
    }).then(
      Swal.fire({
        icon: "success",
        title: "success",
        text: "Update Added Successfully",})
    );
  }

  return (
    <div>
      <NavBar></NavBar>

      <form style={{ width: "800px", margin: "auto", marginTop: "40px" }}>
        <div className="form-group">
          <label style={{ margin: "10px" }}>Property Details</label>
          <textarea id="details"
            onChange={(e) => {
              setDetails(e.target.value);
            }}
            type="text"
            className="form-control"
            placeholder="Details"
          />
           <div> <span id="details1" class="text-danger "></span></div>
        </div>

        <div className="form-group">
          <label style={{ margin: "10px" }}>Please Select Date</label>
          <input
            onChange={(e) => {
              setUpdationDate(e.target.value);
            }}
            className="form-control"
            type="date"
          />
          
        </div>
        <div className="form-group">
          <label style={{ margin: "10px" }}>Add image</label>
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
            className="form-control-file"
          />
        </div>
       
       

        <button
          onClick={isValid}
          style={{ margin: "10px" }}
          type="button"
          className="btn btn-primary"
        >
          Add
        </button>
      </form>
    </div>
  );
}