import axios from 'axios'
import Navbar from './Components/Navbar'
import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

function App() {
    const [user,setUser]=useState([])
    useEffect(()=>{
 axios.get( "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=623&date=10-04-2021")
       .then(res =>{
        console.log(res);
        setUser(res.data)
       })
       
       .catch(err =>{
        console.log(err);
       })
    },[])
  return (
    <>
<BrowserRouter>
<Navbar/>

</BrowserRouter>
   <div className='background mt-3 text-light '>
    session
   </div>

    </>
  )
}

export default App










// import React, {  useEffect } from "react";
// import DataTable from "react-data-table-component";
// import { BrowserRouter } from "react-router-dom";

// import Navbar from "./Components/Navbar";


// export default function App() {
//   const apiData = async () => {
//       return await getData();
//   };

//   useEffect(() => {
//     apiData().then((val)=>{console.log(val)})
//   }, []);

//   return (
//     <>
//     <BrowserRouter>
//     <Navbar/>
    
//     </BrowserRouter>
     
    
// <DataTable/>
//     </>
//   );
// }
