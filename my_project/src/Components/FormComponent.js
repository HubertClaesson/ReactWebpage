import {useState} from 'react'

function Formcomponent() {
const [email, setEmail] = useState('');
const [name, setName] = useState('');
const [password, setPassword] = useState(''); 

   function handleSubmit (e){
    e.preventDefault();
    setEmail('')
    setName('')
    setPassword('')
    // Console loggar ut value i textfälten och läggerdom i ett object
    if(name||email || password){
        console.log({'id':1,'epost:':email, 'användarnamn':name, 'lösenord':password});
    }
    // Om inga fält i formuläret är ifylda så får man ett alert medelande 
    if(!name||!email || !password){
        alert('Fyll i alla uppgifter')
    }

 }


    return ( 
    <>
    <div className="FormWrap">
    <form onSubmit={handleSubmit}>
        <h2 className="FormHeaderText">Bli medlem</h2>
        <div className="inputwrap">
        <label>Epost</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="inputwrap">
        <label>Användarnamn</label>
        <input type="text" value={name}  onChange={(e) => setName(e.target.value)}/>
      <div>
        </div> 
        </div>
        <div className="inputwrap">
        <label>Lösenord</label>
        <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button className="FormButton" type="submit">Bli medlem</button>
    </form>
    </div>
    </> );
}

export default Formcomponent;