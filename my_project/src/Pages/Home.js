import '../FolderCss/home.css'
import HeroHomeComponent from '../Components/HeroHomeComponent';
import SubscriptionComponent from '../Components/subscriptionComponent';
import HomeTextComponent from '../Components/HomeTextComponent'


function Home() {
    return ( 
        <>
        <HeroHomeComponent />
        <div className='headersubContainer'>
        <h2 className='headersub'>Prenumerera på glasögon</h2>
        </div>
         {/* Abonemangspriser */}
        <div className="flexprops">
        <SubscriptionComponent header={"Budget- paketet"} price={"89 kr"} description={"En bra vara med bra kvaliteter"} par={" 1 par/mån"}/>
        <SubscriptionComponent  header={"Medium- paketet"} price={"110 kr"} description={"En bra vara med bra kvaliteter"} par={" 2 par/mån"}/>
        <SubscriptionComponent  header={"Familje- paketet"} price={"150 kr"} description={"En bra vara med bra kvaliteter"} par={" 4 par/mån"}/>
        </div>
        <HomeTextComponent /> 
        </>
     );
}

export default Home;