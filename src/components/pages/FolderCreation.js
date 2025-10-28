import Select from "react-select";
import { useState } from "react";
import axios from "axios";


const options = [
    {value:1, label:'Enrollee'},
    {value:2, label:'Medical Record'},
    {value:3, label:'Visit'}
];


function FolderCreation()
{
    const [folderType, setFolderType] = useState(null);
    const [folderId, setFolderId] = useState('');
    const [parentFolderId, setParentFolderId] = useState('');

    const handleClick = async () =>
    {
        const folderDto = {
            folderId: folderId,
            folderOwnerId: parentFolderId,
            folderType: folderType.value
        };

        await axios.post("https://dms-tnwc.onrender.com/api/folders/folder",
            folderDto,
            {
                headers: { 
                    Authorization : `Bearer ${localStorage.getItem('token')}`
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
            <p>Select folder type</p>
            <Select className='input-select' defaultValue={folderType} onChange={setFolderType} options={options}/>
            <p>Set folder ID</p>
            <input className='input-select' value={folderId} onChange={(e) => setFolderId(e.target.value)}/>
            <p>Parent folder ID</p>
            <input className='input-select' value={parentFolderId} onChange={(e) => setParentFolderId(e.target.value)}/>
            <button onClick={handleClick}>Create</button>
        </div>
    );
}

export default FolderCreation;