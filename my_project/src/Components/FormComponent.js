import {useState} from 'react'

function Formcomponent() {

const [email, setEmail] = useState('');
const [name, setName] = useState('');
const [password, setPassword] = useState(''); 

   function handleSubmit (e){
    e.preventDefault();
    setPassword('');
    setEmail('');
    setName('');
    console.log('Lösenord:',password, 'Användarnamn:', name, 'Epsot:', email)
   }
   
   
   
    return ( 
    <>
    <div className="FormWrap">
    <form onSubmit={handleSubmit}>
        <h2 className="FormHeaderText">Signupp</h2>
        <div className="inputwrap">
        <label for="">Epost</label>
        <input type="email"  name="" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label>Använarnamn</label>
        <input type="text"  name="" value={name}  onChange={(e) => setName(e.target.value)} />
        <label for="">Lösenord</label>
        <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button className="FormButton" type="submit">Bli medlem</button>
    </form>
    </div>
    </> );
}

export default Formcomponent;