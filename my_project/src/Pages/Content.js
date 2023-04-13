import '../FolderCss/content.css'
import FetchComponent from '../Components/FetchComponent'
function Content() {
    return ( 
        <>
        <div className='Boxwrap'>
        <h1 className='Headertext'>Vi har över 10 produkter</h1>
        </div>
        <FetchComponent />
        </>
     );
}

export default Content;