import '../FolderCss/content.css'
import FetchComponent from '../Components/FetchComponent'
function Content() {
    return ( 
        <>
        <h1 className='Headertext'>Vi har över 10 produkter</h1>
        <FetchComponent />
        </>
     );
}

export default Content;