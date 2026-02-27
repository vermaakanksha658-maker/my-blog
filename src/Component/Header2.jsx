import React from 'react'

function Header2({ setSearch }) {
  
  return (
    <div >
      <div style={{ display: "flex", margin: "auto", justifyContent: "center", }}>
        <div className="card w-100 border-0 mt-4">
          <div className="card-body text-center d-flex flex-column align-items-center border-none">
            <h1 style={{ fontSize: "60px" }} className="card-title mt-4 mb-4 ">Your own <span className="text-primary">blogging </span><br />platform </h1>
            <h6 style={{ fontSize: "20px" }} className="card-subtitle mt-4 mb-4 text-muted">This is your space to think loud , to share what matters,
              and to write without filters.Whether <br />it's one word or a thousands , your story starts right here .</h6>
            <form className="d-flex justify-content-center gap-2 w-100 mt-4 mb-4 ">
              <input type="text" className="form-control w-50" placeholder="Search for blogs" onChange={(e) => setSearch(e.target.value)} />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header2
