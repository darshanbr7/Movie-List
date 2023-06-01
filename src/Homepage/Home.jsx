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
    console.log(detail);
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                <center> <h3 className='my-3' >Movie List</h3></center>
                    <div className="card">
                        <div className="card-body">
                            <table className='table'>
                                <thead>
                                    <th>MovieName</th>
                                    <th>Language</th>
                                   
                                    <th></th>
                                </thead>
                                <tbody>
                                    {
                                        detail.map((ele,index)=>{
                                            return <tr key={index}>
                                              <td>{ele.show.name}</td> 
                                              <td>{ele.show.language}</td> 
                                           
                                             <td><button className='btn btn-primary text-white'  onClick={()=>{
                                                const name=ele.show.name
                                                const summary=`${ele.show.summary}`
                                                const rating=ele.show.rating.average
                                                const status=ele.show.status
                                                const detail=ele.show.url
                                                const image=`${ele.show.image.average}`
                                                localStorage.setItem("name",name)
                                                localStorage.setItem("summary",summary)
                                                localStorage.setItem("rating",rating)
                                                localStorage.setItem("status",status)
                                                localStorage.setItem("detail",detail)
                                                localStorage.setItem("image",image)
                                                navigate("/detail")
                                             }}>Details</button></td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    </div>
  )
}

export default Home