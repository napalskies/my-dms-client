import axios from 'axios';
import { useState } from 'react';
import '../../App.css'
import FolderCreation from './FolderCreation';
import Display from './Display';
import Upload from './Upload';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

function Dashboard()
{

    return(
    <div>
        <nav className='navbar'>
            <Link to="/dashboard/create-folder" className="navbar-item">Create folder</Link>
            <Link to="/dashboard/upload" className="navbar-item">Upload document</Link>
            <Link to="/dashboard/display" className="navbar-item">Display document</Link>
        </nav>
        <div>
            <Outlet/>
        </div>
    </div>
  );
}


export default Dashboard;