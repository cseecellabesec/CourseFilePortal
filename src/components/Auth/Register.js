import React,{useState} from 'react'
import { signUser } from '../firebase'

export default function Register (){

    const [user,setUser]=useState({Name:"",email:"",password:"",userId:""})
    return (
        <div class="container">

        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div class="col-lg-7">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
                            <form class="user" id="signup-form">
                                <div class="form-group row">
                                    <div class="col-sm-12 mb-3 mb-sm-0">
                                        <input type="text" class="form-control form-control-user" onChange={(e)=>{
                                            var data={
                                                Name:e.target.value,
                                                email:user.email,
                                                password:user.password,
                                                userId:user.userId,

                                            }
                                            setUser(data)
                                            console.log(user)
                                        }}  id="sname"
                                            placeholder="Your Name"/>
                                    </div>
                                    
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control form-control-user" onChange={(e)=>{
                                        var data={
                                            Name:user.Name,
                                            email:e.target.value,
                                            password:user.password,
                                            userId:user.userId

                                        }
                                        setUser(data)
                                        console.log(user)
                                    }} 
                                        placeholder="Email Address"/>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="password" class="form-control form-control-user" onChange={(e)=>{
                                            var data={
                                                Name:user.Name,
                                                email:user.email,
                                                password:e.target.value,
                                                userId:user.userId,

                                            }
                                            setUser(data)
                                            console.log(user)
                                        }}
                                            id="spassword" placeholder="Password" />
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control form-control-user" onChange={(e)=>{
                                            var data={
                                                Name:user.Name,
                                                email:user.email,
                                                password:user.password,
                                                userId:e.target.value,

                                            }
                                            setUser(data)
                                            console.log(user)
                                        }} id="suserId"
                                            placeholder="User ID" />
                                    </div>
                                    
                                </div>
                                <button type="button" id="signupbtn" onClick={()=>{
                                    signUser(user.Name,user.email,user.password,user.userId)
                                }} class="btn btn-primary btn-user btn-block">
                                    Register Account
                                </button>
                                <hr />
                                <a href="/" class="btn btn-google btn-user btn-block">
                                    <i class="fab fa-google fa-fw"></i> Register with Google
                                </a>
                                <a href="/" class="btn btn-facebook btn-user btn-block">
                                    <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                </a>
                            </form>
                            <hr />
                            <div class="text-center">
                                <a class="small" href="/reset-password">Forgot Password?</a>
                            </div>
                            <div class="text-center">
                                <a class="small" href="/">Already have an account? Login!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
}