import React from 'react';
import './Signup.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { RxDotFilled } from "react-icons/rx";
import { useContext } from 'react';
import { Authcontext } from '../../Context/UserContext';
import { useState } from 'react';
const Signup = () => {
    const{createuser,signupwithgoogle,githubacount,updatename}=useContext(Authcontext);
    const[passworderror,setpassworderror]=useState('');
    const[sucess,setsucess]=useState('');
    const handleregister=(event)=>{
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        const conframpassword=event.target.conframpassword.value;
        console.log(name,conframpassword);
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
        createuser(email,password)
        .then(req=>{
            const user=req.user;
            console.log(user);
            setsucess('Acount create sucessfully');
            updatename(name)
            .then(()=>{
            })
            .catch((error)=>{
                setpassworderror(error.message);
                console.log(error);
            })
        })
        .catch(error=>{
            console.error(error);
            setpassworderror(error.message)
        })  
    }
    const handlegooglesignup=()=>{
        signupwithgoogle()
    .then(req=>{
      const user=req.user;
      console.log(user);
      setsucess('Acount create sucessfully')
    })
    .catch(error=>{
      console.error(error);
      setpassworderror(error.message)
    })
    }
    const handlegithubacount=()=>{
        githubacount()
.then((req)=>{
  const user=req.user;
  console.log(user);
  setsucess('Acount create sucessfully')
})
.catch((error)=>{
  console.error(error);
})
setsucess('')
    }

    return (
        <div className='signup-container'>
        <div className='hole-register'>
        <div className='top'>
           <RxDotFilled className='dot1'></RxDotFilled>
           <RxDotFilled  className='dot1' id='dots'></RxDotFilled>
            <RxDotFilled  className='dot1'></RxDotFilled>
             
        </div>
        <div className='register-from'>
                <div className='register-left'>
                    <h4>iAcademy</h4>
                    <p>Signup with social media to <br/> get quick access</p>
                    <Button onClick={handlegooglesignup}  className="register-btns" variant="outline-primary"><Link id='lin' className="links">Signup with Google</Link></Button>
                    <Button onClick={handlegithubacount}  className="register-btns" variant="outline-danger"><Link id='lin' className="links">Signup with GitHUb</Link></Button>
                </div>
                <div className='register-right'>
                <h6>Signup for Course</h6>
                <p className='sucessfull'>{sucess}</p>
                <Form onSubmit={handleregister} className='form'>
                       <Form.Group className="mb-3 email" controlId="formBasicEmail">
                         <Form.Label>User Name</Form.Label>
                         <Form.Control type="text" name='name' placeholder="Enter Name" required />
                          </Form.Group>
                        <Form.Group className="mb-3 email" controlId="formBasicEmail">
                         <Form.Label>Email address</Form.Label>
                         <Form.Control type="email" name='email' placeholder="Enter email" required />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                           <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Confram Password</Form.Label>
                           <Form.Control type="password" name='conframpassword' placeholder="Confram Password" required />
                        </Form.Group>
                        <div className='term-for'>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Acepts terms,condition" />
                        </Form.Group>
                        {/* <Link className='forget' to='/'>Forget password</Link> */}
                        </div>
                        
                     <Button className='submit' variant="primary" type="submit">Submit</Button>
                     <p className='alredy-text'>Alredy have an acount ! please <Link className='alredy-log' to='/login'> Log in</Link></p>
                     
                     <p className='error'>{passworderror}</p>
               </Form>
                </div>
            </div>
        </div>

        </div>
    );
};

export default Signup;