import { useDocumentListContext } from "./DocumentProvider";

function Documento() 
{
    const {documents} = useDocumentListContext();
    return(
        <div>{documents.map((d, index) => <h1 key={index}>{d}</h1>)}</div>
    );
}

export default Documento;