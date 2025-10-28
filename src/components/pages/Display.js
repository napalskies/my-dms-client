import {Document, Page} from '@react-pdf/renderer';
import axios from 'axios';
import { useState } from 'react';
import FolderItem from './FolderItem.js'

function Display()
{
    const[blob, setBlob] = useState('');
    const[folderId, setFolderId] = useState('');
    const[folderData, setFolderData] = useState(null);
    
    const handleGetDocuments = async () =>
    {
        await axios.get(`https://dms-tnwc.onrender.comapi/folders/folder?folderId=${folderId}&folderType=1`,
            {
                headers: { Authorization : `Bearer ${localStorage.getItem('token')}` }
            }
        )
        .then(response =>
        {
            console.log(response);
            setFolderData(response.data);
        }
        );
    }

    const getBlobContent = (element) =>
    {
        const docId = element.target.innerHTML;
        axios.get(`http://dms-tnwc.onrender.com/api/fileoperations/download?guid=${docId}`,
            {
                headers:{
                    Authorization : `Bearer ${localStorage.getItem('token')}`,
                },
                responseType:"blob"
            }
        )
        .then( response => {
            setBlob(response.data);
        });
    }
    return(
        <div className="display-view">
            <div className="folder-view">
                <input className='input-select' placeholder="Search for folder" value={folderId} onChange={(e) => setFolderId(e.target.value)}/>
                <button onClick={handleGetDocuments}>Get folders and documents</button>
                {folderData && <FolderItem folder = {folderData} margin={0} onClickDocument = {getBlobContent}/>}
                {/* {docList && docList.map((doc, index) => <p key ={index} onClick={getBlobContent}>{doc}</p>)} */}
            {/* <button onClick={getBlobContent}>Click to see</button> */}
            </div>
            <div className='document-view'>
            {blob && <iframe src={URL.createObjectURL(blob)}></iframe>}
            </div>
        </div>
    )
}

export default Display;