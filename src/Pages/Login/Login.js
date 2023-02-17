import React from 'react';
import'./Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RxDotFilled } from "react-icons/rx";
import { useContext } from 'react';
import { Authcontext } from '../../Context/UserContext';
import { useState } from 'react';
const Login = () => {
    const[passworderror,setpassworderror]=useState('');
    const[sucess,setsucess]=useState('');
    const[emailind,setemail]=useState('');
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const Navigate=useNavigate();
    const{userlogin,signupwithgoogle,githubacount,resetpassword}=useContext(Authcontext);
    const handlelogin=(event)=>{
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;
        const conframpassword=event.target.conframpassword.value;
        if(!/(?=.*[A-Z])/.test(password)){
            setpassworderror('At least one capital latter');
            return;
        }
        if(!/(?=.*[!@#$&*])/.test(password)){
            setpassworderror('At least one specil character');
            return;
        }
        if(!/(?=.*[0-9])/.test(password)){
            setpassworderror('At least one Digit');
            return;
        }
        if(!/(?=.*[a-z])/.test(password)){
            setpassworderror('At least one small latter');
            return;
        }
        if(password.length<8){
            setpassworderror('Password minimum length is 8');
            return;
        }
        if(password!==conframpassword){
            setpassworderror('Password not match');
            return;
        }
        setpassworderror('');
        userlogin(email,password)
        .then((req)=>{
            const user=req.user;
            console.log(user);
            setsucess('Login sucessfully')
            Navigate(from, { replace: true });
        })
        .catch((error)=>{
            console.error(error);
        })
    }
    const giveemail=(event)=>{
        const emails=event.target.value;
        setemail(emails);
    }
    const forgetpassword=()=>{
        resetpassword(emailind)
        .then(()=>{
            alert('please check your emial');
        })
        .catch((error)=>{
            setpassworderror(error.message);
            console.error(error);
        })
        if(!emailind){
            alert('please enter your email');
            return;
        }
    }
    const handlegooglelogin=()=>{
        signupwithgoogle()
    .then(req=>{
      const user=req.user;
      console.log(user);
      setsucess('login sucessfully')
      Navigate(from, { replace: true });
    })
    .catch(error=>{
      console.error(error);
    })
    }
    const handleacountgit=()=>{
        githubacount()
.then((req)=>{
  const user=req.user;
  console.log(user);
  setsucess('Login sucessfully');
  Navigate(from, { replace: true });
})
.catch((error)=>{
  console.error(error);
})
setsucess('');
    }

    return (
        <div className='login-container'>
                    <div className='hole-register'>
        <div className='top'>
           <RxDotFilled className='dot1'></RxDotFilled>
           <RxDotFilled  className='dot1' id='dots'></RxDotFilled>
            <RxDotFilled  className='dot1'></RxDotFilled>
             
        </div>
        <div className='register-from'>
                <div className='register-left'>
                    <h4>iAcademy</h4>
                    <p>Login with social media to <br/> get quick access</p>
                    <Button onClick={handlegooglelogin}  className="register-btns" variant="outline-primary"><Link id='lin' className="links">Login with Google</Link></Button>
                    <Button onClick={handleacountgit}  className="register-btns" variant="outline-danger"><Link id='lin' className="links">Login with GitHUb</Link></Button>
                </div>
                <div className='register-right'>
                <h6>Login for Course</h6>
                <p className='sucessfull'>{sucess}</p>
                <Form onSubmit={handlelogin} className='form'>
                        <Form.Group className="mb-3 email" controlId="formBasicEmail">
                         <Form.Label>Email address</Form.Label>
                         <Form.Control onBlur={giveemail} type="email" name='email' placeholder="Enter email" />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                           <Form.Control type="password" name='password' placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Confram Password</Form.Label>
                           <Form.Control type="password" name='conframpassword' placeholder="Confram Password" />
                        </Form.Group>
                        <div className='term-for'>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Acepts terms,condition" />
                        </Form.Group>
                        <Link onClick={forgetpassword} className='forget'>Forget password</Link>
                        </div>

                        
                     <Button className='submit' variant="primary" type="submit">Submit</Button>
                     <p className='alredy-text'>New user?please <Link className='alredy-log' to='/signup'> Signup</Link></p>
                     
                     <p className='error'>{passworderror}</p>
               </Form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;