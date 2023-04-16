import '../FolderCss/kontakt.css'
import React, {useContext} from 'react';
import {SomeContext} from '../Components/SomeContext'
import KontaktCard from '../Components/KontaktCard';


function Kontakt() {
    const msg = useContext(SomeContext)
    return ( 
        <>
       <KontaktCard />
        <div>{msg}</div>
        </>
     );
}

export default Kontakt;