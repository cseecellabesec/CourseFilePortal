import React, { useState } from "react";
import {loginUser} from '../firebase'


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  



  


  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <div class="row">
                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form
                      class="user"
                      id="loginForm"
                      // action="/user"
                      // method="get"
                    >
                      {/* <div id="loginformAlert">{alert}</div> */}
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control form-control-user"
                          id="lemail"
                          value={email}
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          onChange={(e)=>{
                            setEmail(e.target.value)
                          }}
                          required
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="password"
                          class="form-control form-control-user"
                          id="lpassword"
                          value={password}
                          placeholder="Password"
                          onChange={(e)=>{
                            setPass(e.target.value)
                            
                          }}
                          required
                        />
                      </div>
                      <div class="form-group">
                        <div class="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck"
                          />
                          <label class="custom-control-label" for="customCheck">
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <button
                        type="button"
                        id="loginbtn"
                        class="btn btn-primary btn-user btn-block"
                        onClick={()=>{
                          loginUser(email,password)
                        }}
                      >
                        Login Now
                      </button>
                      <hr />
                      <a
                        href="dashboard.html"
                        class="btn btn-google btn-user btn-block"
                      >
                        <i class="fab fa-google fa-fw"></i> Login with Google
                      </a>
                      <a
                        href="dashboard.html"
                        class="btn btn-facebook btn-user btn-block"
                      >
                        <i class="fab fa-facebook-f fa-fw"></i> Login with
                        Facebook
                      </a>
                    </form>
                    <hr />
                    <div class="text-center">
                      <a class="small" href="/reset-password">
                        Forgot Password?
                      </a>
                    </div>
                    <div class="text-center">
                      <a class="small" href="/register">
                        Create an Account!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
