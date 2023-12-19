import React, { useState } from 'react';
import './Login.css';
import { login } from '../features/UserSlice';
import { SocialIcon } from 'react-social-icons';
import { Button, TextField, Typography, Container, InputLabel } from '@material-ui/core';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [capVal, setCapVal] = useState(null);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        sessionStorage.setItem("email", email);
        dispatch(
            login({
                email: email,
                password: password,
                loggedIn: true,
            })
        )

        navigate('/profile');

    };

    return (
        <React.Fragment>
            <Container className='container'
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    // backgroundColor: 'beige'
                }}
            >
                <form onSubmit={(e) => handleSubmit(e)}>
                    <Typography>Login with</Typography>
                    <div 
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '0 auto',
                            width: '100%',
                        }}
                    >
                        <div style={{ margin: '15px' }}>
                            <SocialIcon url="www.github.com" style={{ margin: '0 15px' }} />
                            <SocialIcon url="www.google.com" style={{ margin: '0 15px' }} />
                            <SocialIcon url="www.facebook.com" style={{ margin: '0 15px' }} />
                        </div>
                    </div>
                    <div className="division">
                        <div className="line l"></div>
                        <span>or</span>
                        <div className="line r"></div>
                    </div>
                    <TextField
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="email"
                        required
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="password"
                        required
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button 
                        fullWidth
                        style={{
                            color: '#FFFFFF',
                            backgroundColor: '#00BFFF',
                            textDecoration: 'none',
                            display: 'block',
                            border: 'none',
                            cursor: capVal ? 'pointer' : 'not-allowed',
                            fontSize: '16px',
                            height: '48px',
                            marginTop: '10px',
                            marginBottom: '20px',
                            fontWeight: 'bold',
                            // ':hover': {
                            //     cursor: 'not-allowed'
                            // }
                        }}  
                        disabled={!capVal}
                        type='submit'
                    >
                        LOGIN
                    </Button>
                    <Container
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <ReCAPTCHA
                            sitekey='6LcPcjUpAAAAAKJyEsZ0vX053kHnbxuexxHBLruU'
                            onChange={(val) => setCapVal(val)}
                        />
                    </Container>
                </form>
            </Container>
        </React.Fragment>
    );
};

