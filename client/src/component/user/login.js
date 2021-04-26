import React from "react";

const logIn = () => {
  return (
    <>
      <body>
        <div className="global-container">
          <div className="card login-form">
            <div className="card-body">
              <h3 className="card-title text-center">Log in to Your account</h3>
              <div className="card-text">
                {/* <!--
      <div className="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> --> */}
                <form>
                  {/* <!-- to error: add className "has-danger" --> */}
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <a href="#" style={{float:'right',fontSize:'12px'}}>
                      Forgot password?
                    </a>
                    <input
                      type="password"
                      className="form-control form-control-sm"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary btn-block"
                    onclick="window.location='dashboard.html'"
                  >
                    Sign in
                  </button>

                  <div className="sign-up">
                    Don't have an account? <a href="#">Create One</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default logIn;
