import '../FolderCss/home.css'
import HeroHomeComponent from '../Components/HeroHomeComponent';
import SubscriptionComponent from '../Components/subscriptionComponent';
import HomeTextComponent from '../Components/HomeTextComponent'


function Home() {
    return ( 
        <>
        <HeroHomeComponent />
        <HomeTextComponent />
        {/* Abonemangspriser */}
        <div className="flexprops">
        <SubscriptionComponent header={"Budget paketet"} price={"89 kr"} description={"En bra vara med bra kvaliter"}/>
        <SubscriptionComponent  header={"Medium paketet"} price={"110 kr"} description={"En bra vara med bra kvaliter"}/>
        <SubscriptionComponent  header={"Fimlje- paketet"} price={"150 kr"} description={"En bra vara med bra kvaliter"}/>
        </div>
        <HomeTextComponent />

        </>
     );
}

export default Home;