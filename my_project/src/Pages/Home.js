import HeroHomeComponent from '../Components/HeroHomeComponent';
import SubscriptionComponent from '../Components/subscriptionComponent';
import '../FolderCss/home.css'

function Home() {
    return ( 
        <>
        <HeroHomeComponent />
        {/* Abonemangspriser */}
        <div className="flexprops">
        <SubscriptionComponent className="Bob" header={"Budget paketet"} price={"1000 kr"} description={"En bra vara med bra kvaliter"}/>
        <SubscriptionComponent className="Bob" header={"Budget paketet"} price={"1000 kr"} description={"En bra vara med bra kvaliter"}/>
        <SubscriptionComponent className="Bob" header={"Budget paketet"} price={"1000 kr"} description={"En bra vara med bra kvaliter"}/>
        </div>
       
        </>
     );
}

export default Home;