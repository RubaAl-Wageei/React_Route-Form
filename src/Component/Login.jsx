
import React from "react";
// import * as mdb from 'mdb-ui-kit'; 
// import { Input } from 'mdb-ui-kit'; 
import '../CSS.css';


class Login extends React.Component{
    render(){
        return(
            <div className="container">
                <form className="form">
                
                    <div class="form-outline mb-4">
                        <input type="email" id="form2Example1" class="form-control" />
                        <label class="form-label" for="form2Example1">Email address</label>
                    </div>
                
                
                    <div class="form-outline mb-4">
                        <input type="password" id="form2Example2" class="form-control" />
                        <label class="form-label" for="form2Example2">Password</label>
                    </div>
                
                    
                    <div class="row mb-4">
                        <div class="col d-flex justify-content-center">
                            
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="form2Example34" checked />
                            <label class="form-check-label" for="form2Example34"> Remember me </label>
                            </div>
                        </div>
                    
                        <div class="col">
                            
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>
                
                
                    <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>
                
                    
                    <div class="text-center">
                        <p>Not a member? <a href="/register">Register</a></p>
                        <p>or sign up with:</p>
                        <button type="button" class="btn btn-secondary btn-floating mx-1">
                            <i class="fab fa-facebook-f"></i>
                        </button>
                    
                        <button type="button" class="btn btn-secondary btn-floating mx-1">
                            <i class="fab fa-google"></i>
                        </button>
                    
                        <button type="button" class="btn btn-secondary btn-floating mx-1">
                            <i class="fab fa-twitter"></i>
                        </button>
                    
                        <button type="button" class="btn btn-secondary btn-floating mx-1">
                            <i class="fab fa-github"></i>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;