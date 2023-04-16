import React, {useContext} from 'react';
import {SaleContext} from '../Components/SaleContext'


function ChangeButton() {
    const [bonus, setBonus] = useContext(SaleContext);

    return ( 
        <>
        <button onClick={() => {
        setBonus(bonus + 10)
      }} type="button" className='ChangeButtonStyle'>Rea</button>
        </>
     );
}

export default ChangeButton;