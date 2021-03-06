import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export default function NavBar()
{
  function removeSession()
  {
    sessionStorage.removeItem("C_id");
  }
    return(
        <>
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Constructo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" href="#" to="/consDashboard">Home</Link>
          
        </li>
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" href="#" to="/addflat">Add Flat Owner</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" href="#" to="/addupdates">Add Updates</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" href="#" to="/addflat">Add Installment</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page"  onClick={removeSession} href="#" to="/logincons">Log Out</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    );
}