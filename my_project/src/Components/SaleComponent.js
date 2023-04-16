import React, {useContext} from 'react';
import {SaleContext} from '../Components/SaleContext'

function SaleComponent() {
    const sale = useContext(SaleContext)
    return ( 
        <>
          <div className="SaleNumber" >{sale}%</div>
        </>
     );
}

export default SaleComponent;