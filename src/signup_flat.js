import { Link } from "react-router-dom";
import pic from "./image/back.jpg"

export function SignUpFlat()
{
    return(
        <div>
             <div class="container-fluid" style={{backgroundImage:`url(${pic})`,backgroundRepeat: "no-repeat",  height: "100%",
    backgroundSize:" 100% 100%"}}>
        <div class="row  justify-content-center align-content-center" style={{height: "100vh"}}>
            <div class="col-4 p-3" style={{backgroundColor: 'rgba(233, 192, 13, 0.2)'}}>
                <div class="text-center">
                    <h2>Validate Your Account Now:</h2>
                </div>
               
                <form>
                    <label>Enter Your FLat key</label><br></br>
                    <input class="form-control" type="text" placeholder="Flat key"/><br></br>
                    <label>Enter Your Name</label><br></br>
                    <input class="form-control" type="text" placeholder="Name"/><br></br>
                    <label>Password</label><br></br>
                    <input class="form-control" type="Password" placeholder="Password"/><br></br>
                    
                  
                    <label>Enter Your Password</label><br></br>
                    <input class="form-control" type="password" placeholder="Password"/><br></br>
                    <label>Confirm Password:</label><br></br>
                    <input class="form-control" type="password" placeholder="Confirm Password"/><br></br>
                    
                    

                    <div class="text-center">
                    <input class="btn btn-dark" type="button" value="Register"/>
                </div>
                <span>Already have Account: <Link to="/">Log in</Link></span>
                    
                </form>
            </div>
        </div>
    </div>
        </div>
    );
}