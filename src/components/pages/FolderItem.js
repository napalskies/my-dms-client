import { useState } from "react";
function FolderItem(props) {
    const [isOpen, toggleIsOpen] = useState(false);

    return(
        <div style = {{marginLeft: `${props.margin}px`}}>
            <div  onClick = {()=>toggleIsOpen(!isOpen)} className="folder-item"><p style={{margin: "0"}}>{props.folder.folderName}</p>
                {isOpen ? <p style={{margin: "0"}}>v</p> : <p style={{margin: "0"}}>{'>'}</p>}</div>
            {isOpen &&
            (<div>{props.folder.documents && props.folder.documents.map(d => <p onClick = {props.onClickDocument} style = {{marginLeft: `${props.margin + 10}px`, cursor: "pointer"}}>{d}</p>)}
            {props.folder.subFolders && props.folder.subFolders.map(s => <FolderItem folder={s} margin={props.margin+10} onClickDocument = {props.onClickDocument} style={{marginLeft: `${props.margin}px`}}/>)}
            </div>)}       
        </div>
    );
}

export default FolderItem;