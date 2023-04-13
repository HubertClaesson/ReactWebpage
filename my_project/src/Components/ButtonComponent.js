import "../FolderCss/home.css"
import {Link} from 'react-router-dom'

function ButttonComponent() {
    return ( 
        <>
        <button className="Buybutton"><Link to={'/SignUp'}>Köp
        </Link>
        </button>
        </>
     );
}

export default ButttonComponent;