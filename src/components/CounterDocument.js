import { useDocumentListContext } from "./DocumentProvider";

function CounterDocument() 
{
    const {documents} = useDocumentListContext();
    return(
        <h3>{documents.length}</h3>
    );
}

export default CounterDocument;