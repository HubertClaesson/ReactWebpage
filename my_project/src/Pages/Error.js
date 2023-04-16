import {Link} from 'react-router-dom'
import React, {useContext} from 'react';
import {SomeContext} from '../Components/SomeContext'

function Error() {
  const card = useContext(SomeContext)

  return (
    <>
      <div className="wrappError">
        <div className="errorcontainer">
          <div className="errormessage">
            <h1>Oj det blev ett error</h1>
            <h4>Tryck på Hem för att ta dig till startsidan</h4>
            <h5><Link to={'/'} style={{textDecoration:'none'}} className='ErrorButton'>Hem</Link></h5>
          </div>
        </div>
      </div>
      <div>
        {card}
      </div>
    </>
  );
}

export default Error;
