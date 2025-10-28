import logo from './logo.svg';
import './App.css';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import FolderCreation from './components/pages/FolderCreation';
import Upload from './components/pages/Upload';
import Display from './components/pages/Display';
import React from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import DocumentList from './components/pages/DocumentList'


function App() {
  return (
    <div>
      {/* <--<p>{props.title}</p>!--> */}
      {/* <Header name="Adina"/>
      <Header name="AdinaUifi"/>
      <nav className="nav">
        <Link to ="/" className="nav-item">Login</Link>
        <Link to ="/document-list" className="nav-item">Doc List</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element = {<Dashboard />}>
          <Route index element={<FolderCreation/>}/>
          <Route path="create-folder" element={<FolderCreation/>}/>
          <Route path="upload" element={<Upload/>}/>
          <Route path="display" element={<Display/>}/>
        </Route>
        <Route path="/document-list" element = {<DocumentList/>}/>
      </Routes>
    </div>
  );
}

export default App;
