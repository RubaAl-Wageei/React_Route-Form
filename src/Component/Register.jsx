
import React from "react";
// import { MDBInput } from 'mdb-react-ui-kit';
import '../CSS.css';


class Register extends React.Component{
    render(){
        return(
            <div className="container">
            
                <form className="form">
                
                    <div class="row mb-4">
                        <div class="col">
                            <div class="form-outline">
                            <input type="text" id="form3Example1" class="form-control" />
                            <label class="form-label" for="form3Example1">User name</label>
                            </div>
                        </div>
                    </div>
                
                    
                    <div class="form-outline mb-4">
                        <input type="email" id="form3Example3" class="form-control" />
                        <label class="form-label" for="form3Example3">Email address</label>
                    </div>
                
                    
                    <div class="form-outline mb-4">
                        <input type="password" id="form3Example4" class="form-control" />
                        <label class="form-label" for="form3Example4">Password</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input type="password" id="form3Example5" class="form-control" />
                        <label class="form-label" for="form3Example4">Confirm Password</label>
                    </div>
                
                    
                    <div class="form-check d-flex justify-content-center mb-4">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                        <label class="form-check-label" for="form2Example33">
                            Subscribe to our newsletter
                        </label>
                    </div>
                
                    
                    <button type="submit" class="btn btn-primary btn-block mb-4">Sign up</button>
                
                    
                    <div class="text-center">
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

export default Register;