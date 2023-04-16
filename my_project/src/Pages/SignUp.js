import Formcomponent from '../Components/FormComponent';
import InformationBoxomponent from '../Components/InformationBoxComponent';
import SignupHeaderText from '../Components/SingupheaderText';

import '../FolderCss/signup.css'


function SignUp() {
    return ( 
        <>
       <SignupHeaderText />
       <Formcomponent />
       <InformationBoxomponent />
        </>
     );
}

export default SignUp;

