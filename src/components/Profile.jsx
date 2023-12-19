import { Box, Button, Container, Grid, InputLabel, TextField, TextareaAutosize, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Profile.css';
import { useDispatch, useSelector } from "react-redux";
import { selectUser, selectUserProfile, updateProfile } from "../features/UserSlice";

export const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const userProfile = useSelector(selectUserProfile);

    const [username, setUsername] = useState(userProfile.username || "");
    const email = sessionStorage.getItem('email');
    const [firstName, setFirstName] = useState(userProfile.firstName || "");
    const [lastName, setLastName] = useState(userProfile.lastName || "");
    const [address, setAddress] = useState(userProfile.address || "");
    const [city, setCity] = useState(userProfile.city || "");
    const [country, setCountry] = useState(userProfile.country || "");
    const [postalCode, setPostalCode] = useState(userProfile.postalCode || "");
    const [aboutMe, setAboutMe] = useState(userProfile.aboutMe || "");
    
    console.log(email);

    const textareaStyle = {
        resize: "vertical"
    };

    const handleUpdateProfile = (e) => {
        e.preventDefault();

        dispatch(
            updateProfile({
                username,
                email,
                firstName,
                lastName,
                address,
                city,
                country,
                postalCode,
                aboutMe,
            })
        )
    }

    return (
        <React.Fragment>
            <Container>
                <Typography
                    variant="h5"
                    style={{
                        margin: '30px',
                        color: '#36454F'
                    }}
                >Edit Profile</Typography>
                <form onSubmit={(e) => handleUpdateProfile(e)}>
                <Container style={{ marginBottom: '30px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <InputLabel style={{ fontSize: '14px', marginBottom: '8px' }}>COMPANY (DISABLED)</InputLabel>
                            <TextField
                                style={{
                                    backgroundColor: '#E5E4E2',
                                    color: '#36454F'
                                }}
                                variant="outlined"
                                fullWidth
                                type="text"
                                required
                                value="Creative Code Inc."
                                disabled
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <InputLabel style={{ fontSize: '14px', marginBottom: '8px' }}>USERNAME</InputLabel>
                            <TextField
                                variant="outlined"
                                fullWidth
                                type="text"
                                required
                                placeholder="Username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <InputLabel style={{ fontSize: '14px', marginBottom: '8px' }}>EMAIL ADDRESS</InputLabel>
                            <TextField
                                variant="outlined"
                                fullWidth
                                type="text"
                                value={email}
                                required
                                disabled
                                placeholder="auto filled"
                            />
                        </Grid>
                    </Grid>
                </Container>
                <Container style={{ marginBottom: '30px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <InputLabel style={{ fontSize: '14px', marginBottom: '8px' }}>FIRST NAME</InputLabel>
                            <TextField
                                variant="outlined"
                                fullWidth
                                type="text"
                                required
                                placeholder="First Name"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <InputLabel style={{ fontSize: '14px', marginBottom: '8px' }}>LAST NAME</InputLabel>
                            <TextField
                                variant="outlined"
                                fullWidth
                                type="text"
                                required
                                placeholder="Last Name"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                </Container>
                <Container style={{ marginBottom: '30px' }}>
                    <InputLabel style={{ fontSize: '14px', marginBottom: '8px' }}>ADDRESS</InputLabel>
                    <TextField
                        variant="outlined"
                        fullWidth
                        type="text"
                        required
                        placeholder="Home Address"
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Container>
                <Container style={{ marginBottom: '30px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <InputLabel style={{ fontSize: '14px', marginBottom: '8px' }}>CITY</InputLabel>
                            <TextField
                                variant="outlined"
                                fullWidth
                                type="text"
                                required
                                placeholder="City"
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <InputLabel style={{ fontSize: '14px', marginBottom: '8px' }}>COUNTRY</InputLabel>
                            <TextField
                                variant="outlined"
                                fullWidth
                                type="text"
                                required
                                placeholder="Country"
                                onChange={(e) => setCountry(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <InputLabel style={{ fontSize: '14px', marginBottom: '8px' }}>POSTAL CODE</InputLabel>
                            <TextField
                                variant="outlined"
                                fullWidth
                                type="number"
                                required
                                placeholder="ZIP Code"
                                onChange={(e) => setPostalCode(e.target.value)}
                                inputProps={{
                                    pattern: "[0-9]*", // Allow only numeric input
                                }}
                            />
                        </Grid>
                    </Grid>
                </Container>
                <Container style={{ marginBottom: '30px' }}>
                    <InputLabel style={{ fontSize: '14px', marginBottom: '8px' }}>ABOUT ME</InputLabel>
                    <TextField
                        variant="outlined"
                        fullWidth
                        type="long text"
                        required
                        multiline
                        minRows={4}
                        placeholder="Enter your description here"
                        inputProps={{ style: textareaStyle }}
                        onChange={(e) => setAboutMe(e.target.value)}
                    />
                </Container>
                <Container style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        style={{
                            color: '#FFFFFF',
                            backgroundColor: '#00BFFF',
                            textDecoration: 'none',
                            display: 'block',
                            border: 'none',
                            fontSize: '16px',
                            height: '48px',
                        }}  
                        type="submit"
                    >
                        Update Profile
                    </Button>
                </Container>
                </form>
                <Container style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                    <Button 
                        style={{
                            color: '#FFFFFF',
                            backgroundColor: '#00BFFF',
                            textDecoration: 'none',
                            display: 'block',
                            border: 'none',
                            fontSize: '16px',
                            height: '48px',
                        }}
                        
                    >
                        <Link to="/table-data" className="table-data-button">View Table</Link>
                    </Button>
                </Container>
            </Container>
        </React.Fragment>
    )
}