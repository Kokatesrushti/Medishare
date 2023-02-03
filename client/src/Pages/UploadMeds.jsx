import React from 'react'
import capsules from '../components/images/capsules.png'
import { useState } from 'react';

const UploadMed = () => {


  const [name,setName]=useState('');
  const [mf_date,setmf_date]=useState('');
  const [exp_date,setexp_date]=useState('');
  const [price,setprice]=useState('');
  const [illness,setillness]=useState('');

  async function upload(e){
    e.preventDefault();
    console.log(name,mf_date,exp_date,price,illness);
    const res=await fetch("http://localhost:2000/api/uploadmed",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name,mf_date,exp_date,price,illness
      })
    })

    const data = await res.json()
    console.log(data);
  }


  return (
    <body className="flex center">
    <div class="page-grid grid">
      <section className="banner grid center">
        {/* <img src={medical} alt="" /> */}
      </section>
      <section className="form-wrapper grid center">
        <form action="" className="form-section">
          <div className="header">
            <h1>Upload Medicine</h1>
          </div>
          <div className="field">
            <label for="">Medicine name</label>
            <input type="text" placeholder="Enter Your name" value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
  
          <div className="field">
            <label for="">Manufacture date</label>
            <input type="text" placeholder="Enter Manufacture Date" value={mf_date} onChange={(e)=>setmf_date(e.target.value)} />
          </div>
          <div className="field">
            <label for="">Expiry Date</label>
            <input type="text" placeholder="Enter Expiry Date" value={exp_date} onChange={(e)=>setexp_date(e.target.value)}/>
          </div>
          <div className="field">
          <div className="field">
            <label for="">Price</label>
            <input type="number" placeholder="Enter Price" value={price} onChange={(e)=>setprice(e.target.value)}/>
          </div>
          <label for="">illness</label>
            <input type="text" placeholder="Enter illness" value={illness} onChange={(e)=>setillness(e.target.value)}/>
          </div>
          <div className="pass-section flex">
            <div className="input-item">
             
             
            </div>
            
          </div>
          <p>Upload Tablet</p>
          <input type="file" />
          <button type="submit" className="btn btn-primary" onClick={upload}>Upload</button>
          
          
        </form>
      </section>
      <div class="grid-item" id='grid2'>
      <img src={capsules} id="capsules" />
      </div>
    
    </div>
    </body>
  )
}

export default UploadMed