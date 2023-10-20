import React from "react";
import { MasterClassContainer } from "./style";

const MasterClassForm = () => {
  return (
    <MasterClassContainer>
      <div className='section-title mb-40'>
        <h1>Sign up for a master class</h1>
      </div>
      <form className="text-start">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="name" className="form-control" id="name" placeholder="Aleksandr"/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="aleks@gmail.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="********"/>
        </div>
        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
      </form>
    </MasterClassContainer>
  )
}

export default MasterClassForm;
