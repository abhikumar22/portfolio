import React from "react";

export default function About() {
  return (
    <div className="row ml-3">
      <div className="col-sm-12 col-lg-6 py-5">
        <h2 className="text-white">Stacked form</h2>
        <form action="/action_page.php">
          <div className="form-group">
            <label  className="text-white" for="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div className="form-group">
            <label  className="text-white" for="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
            />
          </div>
          <div className="form-group form-check">
            <label className="form-check-label text-white">
              <input className="form-check-input" type="checkbox" name="remember" />{" "}
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
