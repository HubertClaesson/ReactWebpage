import "../FolderCss/home.css"
import ButttonComponent from "./ButtonComponent";
function SubscriptionComponent(props) {
  return (
    <>
      <div className="WrappCards"> 
        <div className="cards">
            <h3 className="headercard">{props.header}</h3>
            <h4 className="cardprice">{props.price}</h4>
            <p className="carddescription">{props.description}</p>
            <h5>{props.par}</h5>
            <ButttonComponent />
        </div>
      </div>
    </>
  );
}

export default SubscriptionComponent;
