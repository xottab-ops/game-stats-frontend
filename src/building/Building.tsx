import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import BuildingCard from './components/BuildingCard'

function Building() {
    return (
        <div>
            <Navbar active="1"/>
            <BuildingCard/>
            <Footer/>
        </div>
    );
}
export default Building;