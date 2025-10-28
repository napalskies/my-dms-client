import './App.css';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import FolderCreation from './components/pages/FolderCreation';
import Upload from './components/pages/Upload';
import Display from './components/pages/Display';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import DocumentList from './components/pages/DocumentList'


function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
