import React from 'react'
import {useNavigate} from "react-router-dom"
const Deatils = () => {
    const navigate=useNavigate()
  return (
    <div>
        <div className="container">
            <div className="row">
                <table className='table mt-4'>
                    <thead>
                        <th>MovieName</th>
                        <th>image</th>
                        <th>Rating</th>
                        <th>Status</th>
                        <th>Summary</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{localStorage.getItem("name")}</td>
                            <td><img src={localStorage.getItem("image")} alt='image not found' /></td>
                            <td>{localStorage.getItem("rating")}</td>
                            <td>{localStorage.getItem("status")}</td>
                            <td dangerouslySetInnerHTML={{__html:localStorage.getItem("summary")}}></td>
                            <td><button className='btn btn-success' onClick={()=>{
                                navigate("/form")
                            }}>Book</button></td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    </div>
  )
}

export default Deatils