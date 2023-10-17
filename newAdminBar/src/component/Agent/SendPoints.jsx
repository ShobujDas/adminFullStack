import React from 'react'
import Layout from '../layout/Layout'
import { FaTachometerAlt } from "react-icons/fa";

function SendPoints() {
  return (
    
   <Layout>
      <div className="row m-3  brd">
        <div className="col-md-8">
          <h4>Sent Agent Points</h4>
        </div>
        <div className="col-md-4">
          <div className="d-flex align-items-center mb-2">
            <FaTachometerAlt />
            <div className="ms-2">Home</div>
            <span className="ms-2">{">"}</span>
            <div className="ms-2">Sent Agent Points</div>
          </div>
        </div>
      </div>

      <form className="ms-3">
        <div className="row">
          <div className="row">
            <div className="col-sm-6">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Agent ID
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter name"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Agent Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter name"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Agent Contact Numer 
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="01718484267"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Date
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="2023-10-17"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Points
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder=""
                />
              </div>
            </div>
           
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Save
        </button>
      </form>
   </Layout>
  )
}

export default SendPoints