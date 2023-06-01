import React, { useEffect, useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
const Home = () => {
    const navigate=useNavigate()
    const[detail,setDetail]=useState([])
    useEffect(()=>{
        axios.get("https://api.tvmaze.com/search/shows?q=all")
             .then((res)=>{
                setDetail(res.data)
             })
             .catch((err)=>{
                console.log(err);
             })

    },[])
    
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                <center> <h3 className='my-3' >Movie List</h3></center>
                        {
                          detail.map((ele,index)=>{
                                            return <div key={index} >
                                                <div className="card my-3">
                                                    <div className="card-header">
                                                      <center> <h4 style={{color:"blue"}}>{ele.show.name} </h4> </center> 
                                                    </div>
                                                    <div className="card-body">
                                                        <center>
                                                        <img src={ele.show.image.medium}alt=" not found" /> 
                                                        </center>  
                                              </div>
                                              <div className="card-footer">
                                             Language : <span style={{color:"red"}}> {ele.show.language}</span>  <span className='ml-5' style={{color:"red"}}>{ele.show.rating.average}</span>/10<br/>
                                            <span>Runtime : {ele.show.runtime} min</span>  <button className='btn btn-primary ml-5 btn-sm' onClick={()=>{
                                                    const name=ele.show.name
                                                    const summary=`${ele.show.summary}`
                                                    const rating=ele.show.rating.average
                                                    const status=ele.show.status
                                                    const detail=ele.show.url
                                                    const image=`${ele.show.image.medium}`
                                                    localStorage.setItem("name",name)
                                                    localStorage.setItem("summary",summary)
                                                    localStorage.setItem("rating",rating)
                                                    localStorage.setItem("status",status)
                                                    localStorage.setItem("detail",detail)
                                                    localStorage.setItem("image",image)
                                                    navigate("/detail")
                                            }}>More Details</button>
                                              </div>
                                              </div>
                                           
                                            
                                            </div>
                                        })
                                    }
                               
                    
                    
              </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    </div>
  )
}

export default Home
/*
<td><button className='btn btn-primary text-white'  onClick={()=>{
                                                
                                             }}>Details</button></td>*/