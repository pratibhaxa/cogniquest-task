import React from 'react';
import { Login } from './components/Login';
import { Route, Routes } from 'react-router-dom';
import { Profile } from './components/Profile';
import { useSelector } from 'react-redux';
import { selectUser } from './features/UserSlice';
import { TableData } from './components/TableData';

function App() {
    const user = useSelector(selectUser);
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element = {<Login />} />
                <Route path="/login" element = {<Login />} />
                {/* {user && ( */}
                    <Route path="/profile" element={<Profile />} />
                {/* )} */}
                <Route path="/table-data" element = {<TableData />} />
            </Routes>
        </React.Fragment>
    );
}

export default App;
