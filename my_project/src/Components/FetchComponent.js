import { useState, useEffect } from "react";
import '../FolderCss/content.css'
function FooterComponent() {
    const [item, setItem] = useState([])

    useEffect(() => {
        fetch('products.json', {
            headers: {
                'Content-Type': 'aplication/json', 'Acept': 'application/json'
            }
        })
        .then(response => response.json()).then(data => setItem(data))
    }, []);

    return ( 
        <>
            <div className="gridContainer">
            {item.map(out => (
                <div className="flexcontainer" key={out.id}>
                       <img className="imgout" src={out.img} alt="products"/>
                   {/* <h3 className="nameout">{out.name}</h3> 
                    <p className="priceout">{out.price}</p> */}
                </div>
            ))}
            </div>
        </>
     );
}

export default FooterComponent;