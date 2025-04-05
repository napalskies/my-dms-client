import React from 'react';

const DocumentsContext = React.createContext();

const todaysDocuents = ["Document 1", "Document2", "Docuemtn 3"];

const DocumentProvider = ({children}) => 
{
    const [documents, setDocumentsList] = React.useState(todaysDocuents);
    return(
        <DocumentsContext.Provider value={{documents}} >
            {children}
        </DocumentsContext.Provider>
    );
}

export const useDocumentListContext = () => React.useContext(DocumentsContext);

export default DocumentProvider;