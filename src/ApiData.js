// import {useState,useEffect} from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Table from "./Components/Table";

const ApiData = () => {
  const [covidArray, setCovidArray] = useState([]);

//   const [sessionId, setSessionId] = useState("");
// const [slot,setSlot] = useState("")
//   const [date, setDate] = useState([]);
//   const [to,setTo] = useState("")

//   const [vaccine, setVaccine] = useState([]);

//   const [min_age_limit, setMin_age_limit] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=623&date=12-04-2021"
      );
      setCovidArray(response.data.centers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   if (covidArray) {
  //     covidArray.forEach((item, index) => {
  //       // let centerId = item.center_id;
  //       // let name = item.name;
  //       // let pincode = item.pincode;
  //       // let state = item.state_name;
  //       // let district = item.district_name;
  //       // let block = item.block_name;
  //       let Time = item.to
  //       let Slot = item.slots;

  //       for (let ele of item.sessions) {
  //         let session = ele.session_id;
  //         let date = ele.date;
  //         let Vaccine = ele.vaccine;
  //         let Age_Limit = ele.min_age_limit;
  //         setSessionId(session);
  //         setDate(date);
  //         setTo(Time)
  //         setSlot(Slot)
  //         setVaccine(Vaccine);
  //         setMin_age_limit(Age_Limit);
  //       }
  //     });
  //   }
  // }, [covidArray]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>

      <Table
        array={covidArray}
        // sessionId={sessionId}
        // date={date}
        // Vaccine={vaccine}
        // min_age_limit={min_age_limit}
        // to={to}
        // slot={slot}
      />
    </>
  );
};

export default ApiData;
