import {Link} from 'react-router-dom'
function Error() {
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
    </>
  );
}

export default Error;
