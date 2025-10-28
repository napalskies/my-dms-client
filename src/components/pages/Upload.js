import { useState } from "react";
import axios from "axios";
import { FilePicker } from 'react-file-picker'

function Upload()
{
    const [file, setFile] = useState('');
    const [folderId, setFolderId] = useState('');

    const handleFileSelect = (selectedFile) =>
    {
        console.log(selectedFile);
        setFile(selectedFile);
    }
    
    const uploadFile = async () =>
        {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("folderId", folderId.toString());
            console.log(formData);
            console.log(file);
            console.log(folderId);
    
            await axios.post(" http://dms-tnwc.onrender.com/api/fileoperations/upload",
                formData,
                {
                    headers: { 
                        Authorization : `Bearer ${localStorage.getItem('token')}`,
                        "Content-Type" :  "multipart/form-data"
                        }
                }
            )
            .then(response =>
            {
                console.log(response);
            }
            );
        }
    return(
        <div>
            <FilePicker onChange = {handleFileSelect}>
                <button>Select File</button>
            </FilePicker>
            <p>{file.name}</p>
            <p>Set folder ID</p>
            <input className='input-select' value={folderId} onChange={(e) => setFolderId(e.target.value)}/>
            <button onClick={uploadFile}>Upload</button>
        </div>
    )
}

export default Upload;