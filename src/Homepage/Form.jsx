import React from 'react'

const Form = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="card mt-4">
                        <div className="card-body">
                            <center > <h3>Book Your Ticket</h3></center>
                            <form  onSubmit={(e)=>{e.preventDefault()
                            alert("ticket Boocked Succesfully")}}>
                                <div className="form-group mt-3">
                                    <label >MovieName</label>
                                    <input type="text" className='form-control' value={localStorage.getItem("name")} disabled />
                                </div>
                                <div className="form-group">
                                    <label >UserName</label>
                                    <input type="text"  className='form-control' />
                                </div>
                                <div className="form-group">
                                    <label >No of Tickets</label>
                                    <input type="number"  className='form-control' />
                                </div>
                                <center>
                                    <button className='btn btn-primary'> Book</button>
                                </center>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form