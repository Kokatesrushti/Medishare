import React from 'react'
import './SearchNgo.css'
import { useNavigate } from "react-router-dom"
import Card from '../components/Card.jsx'
import { ReactDOM, useState,useEffect } from 'react';
import axios from 'axios';
import searchngo from "../components/images/searchngo.png"
import Uploadmeds from './UploadMeds'



const SearchNgo = () => {
  const [ngo,setngo]=useState('');
    useEffect(() => {
        axios.get("http://localhost:2000/api/getngo")
            .then(res => {
                console.log(res.data.NGO_List);
                setngo(res.data.NGO_List);

            }).catch(error => {
                console.log(error);
            })
    }, [])
  const val=document.getElementById("location");
  console.log(val)
  const [location,setlocation]=useState("Thane");
  async function SortNgo(e){
      e.preventDefault();
      // console.log(firstName,lastName,email,password,location);
      // const res=await fetch("http://localhost:2000/api/getngobylocation",{
      //   method:'GET',
      //   headers:{
      //     'Content-Type':'application/json'
      //   },
      //   body:JSON.stringify({
      //     location
      //   })
      // })
      // console.log(res)


      useEffect(() => {
        axios.get("http://localhost:2000/api/getngobylocation")
            .then(res => {
                console.log(res.data.NGO_List);
                setngo(res.data.NGO_List);

            }).catch(error => {
                console.log(error);
            })
    }, [])
      
    }

 

  return (
    <div className="searchContainer">
      <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search For NGO's near-by</h1><br/><br/>
      {/* <div><img src={searchngo} className="searchngo"></img></div> */}
      <input type="text" placeholder='Search..' className='search' id="locaton"/>
      <button onClick={SortNgo} id="button">ENTER</button>
     
      <img src={searchngo} className="searchimg"></img>
      {
        ngo && ngo.map(item=>(
            <Card key={item._id} name={item.name} email={item.email} location={item.location}/>
        ))
      }
      <footer></footer>
    </div>
  )
}

export default SearchNgo