import axios from 'axios';
import React from 'react'

const About = () => {
    const skills=["HTML", "CSS" , "Javascript"];
    const teams =[{name:"Hacks for Hackers", teammates:["Harsh","Prakhar","Ananya"]},{name:"Hacks for Hackers", teammates:["Harsh","Prakhar","Ananya"]},{name:"Hacks for Hackers", teammates:["Harsh","Prakhar","Ananya"]},{name:"Hacks for Hackers", teammates:["Harsh","Prakhar","Ananya"]}]
    const x=async()=> {
        try {
            const response = await axios.get(
              `http://127.0.0.1:8000/user/profile/harsh`,
              {
                withCredentials: true,
              }
            );
            console.log(response.data); // Log the data from the response
          } catch (error) {
            console.log(error);
          }
    }
    
    x();
    
    
    
    
    
    
    
    //hbh
    
    
    
    const els=skills.map((e)=>{
        return <span className="border rounded-pill px-3 py-2 m-2 d-inline-block">
            {e}
        </span>
    })
    const myTeams=teams.map((e)=>{
        return <div className='card mb-4  py-4 mx-auto col-xl-5 me-xl-3 me-lg-1'>
            <div className='fs-3 text-center stronger'>{e.name}</div>
            <div className='d-flex justify-content-center align-items-center'>
                {/* <div className='me-3 '>Teammates: </div> */}
                {e.teammates.map((mate)=>{return <span d-inline-block className='me-3'>{mate}</span>})}
            </div>

        </div>
    })
  return (
    <div className='d-lg-flex mx-5 mt-5 gap fs-5 '>
        <div className=' card  p-4 col-lg-4 mb-4'>
            <div className='display-5 fw-bold mb-5 text-center'>My Profile</div>
            <div className='mb-4 d-flex'>
                <div className='me-3'>Name :</div>
                <span >Elon Musk</span>
            </div>
            <div className='mb-2 d-flex'>
                <span  className='me-3 mb-4'>Email :</span>
                <span >ElonMusk@tesla.cc</span>
            </div>
            <div className=''>
                <span className='me-3 text-start mb-3 '>Skills/Interests :</span>
                <div className='mt-4'>
                {els}
                    </div>
            </div>


        </div>
        <div className='w-100 card me-5 p-4 '>
            <div className='display-5 fw-bold mb-5 text-center'>My Teams</div>
            <div className="row">
                {myTeams}
            </div>
            
        </div>
    </div>
  )
}

export default About