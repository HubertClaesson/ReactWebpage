import Formcomponent from '../Components/FormComponent';
import InformationBoxBomponent from '../Components/InformationBoxBomponent';
import SignupHeaderText from '../Components/SingupheaderText';

import '../FolderCss/signup.css'


function SignUp() {
    return ( 
        <>
       <SignupHeaderText />
       <Formcomponent />
       <InformationBoxBomponent />
        </>
     );
}

export default SignUp;

// style={{textAlign:'center', margin:' 4em 0 4em 0'}} 