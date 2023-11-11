/* eslint-disable no-undef */
import React, { useState } from 'react'
import classes from './Login.module.css'
// import { styled } from 'styled-components';
import { Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const Login = () => {
    // const [email, setEmail] = useState("");
    // const [emailIsValid, setEmailIsValid] = useState(false);
    // const [Error, setError] = useState("");
    // const navigate = useNavigate();
    // const pattern = new RegExp(/^\d{1,10}$/);

    // const isEmail = email.includes('@');  
    // console.log(isEmail);
    // const IsPhone = pattern.test(email) && email.length === 10
    // console.log(IsPhone);
    // const isEmailorIsMobile = isEmail || IsPhone

    // const emailChangeHandler = (e) => {
    //     e.preventDefault();

        
    //         console.log(isEmailorIsMobile);
    //             if (isEmailorIsMobile) {
    //         setEmailIsValid(true);
    //     } else {
    //         setEmailIsValid(false);
    //         setError("Enter the valid email or Mobile Number")
    //     } 

    // }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [err, setErr] = useState(false);
    const [errp, setErrp] = useState(false);
    // const [passState, setPassState] = useState(false);
    const navigate = useNavigate();
    

    function isEmailOrIsMobile(event) {
        event.preventDefault();
        const validEmail = email.includes('@');
        const validMobile = email.length === 10;
        if (validEmail || validMobile) {
            setVisible(true)
            setErr(false)
            console.log(email)
        } else {
            setVisible(false);
            setErr(true);
             console.log(email)
        }   }



    function isPasswordValid(event) {
         event.preventDefault();
        // const validPassword = (password.length >= 6)
            const ispassword = (password.length >= 10 && password !== "")
        console.log(ispassword);
        
        if (ispassword) {
                // setPassState(true)
                setErrp(false);
            setPassword(event.target.value);
            if (ispassword) {
                navigate('/main');
            }
                console.log(password);
            
            
        } else {
            setErrp(true);
            setPassState(false)
                console.log(password);
            return

        }
    }
    


    
    return (
        
    <div className={classes.appHeader}>
      <div className={classes.signin_box}>
        <div className={classes.zoho_logo}>
        </div>
        <div>
            <form>
                <div className={classes.signin_head}>
                    <p className={classes.signintitle}>Sign in</p>
                    <p className={classes.signinacess}>to access Accounts</p>
                </div>
                        <div className={classes.email}>
                            <div className={classes.change}>
                                <div className={classes.wide}>
                                    <input
                                        type="text"
                                        placeholder="Email address or mobile number"
                                        onChange={(event) => { setEmail(event.target.value) }}
                                        onBlur={(event) => {setErr(false)}}    
                                        className={classes.textbox}
                                        />
                                        <div>
                                        {err && <p className={classes.err}>Enter valid email or mobile number</p>}            
                                        </div>
                                </div>
                                <div>
                                    {visible &&  (<span className={classes.change}>
                                                <Link to='/' onClick={() => navigate(-1)}>Change</Link> </span>)}
                                </div>
                            </div>
                                {visible &&
                                    (<input
                                        type="password"
                                        placeholder="Enter Password"
                                        onChange={(event) => { setPassword(event.target.value) }}
                                        onBlur={(event) => {setErrp(false)}}
                                        className={classes.textbox}
                                    />)}
                                {errp && <p className={classes.err} >Enter the Valid PassWord</p>}
                                                    
                                {!visible &&
                                    <button className={classes.btn} size="lg" onClick={isEmailOrIsMobile}>
                                    <span>Next</span>
                                    </button>}
                                {visible &&
                                    <button className={classes.btn} size="lg" onClick={isPasswordValid}>
                                    <span>Sigin</span>
                                    </button>}
                        </div>
                                             
               
                                {visible &&
                                    <div className={classes.text16}>
                                        <Link to="/">Sign in using email OTP</Link>
                                        <Link to="/">Forget Password</Link>
                                    </div>}
                                {visible &&
                                    <div className={classes.text16} >
                                        <a className={classes.text16a} href='/' >Forgot Password?</a>
                                    </div>}
            </form>
            
        </div>
      </div>
       <footer id="footer"> 
            <span className={classes.foot}>
                © 2023, <a className={classes.foot } href="/" target="_blank">MedicalMine Inc.</a> All Rights Reserved.
            </span>
        </footer>
      </div>
  )
}

export default Login