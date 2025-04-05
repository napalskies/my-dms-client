
import DocumentProvider from '../DocumentProvider';
import CounterDocument from '../CounterDocument';
import Documento from '../Document';

function DocumentList() 
{
return(
<DocumentProvider>
    <Documento/>
    <CounterDocument/> 
  </DocumentProvider>);
}

export default DocumentList;