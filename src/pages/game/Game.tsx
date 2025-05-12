import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';
import GameDesc from './components/GameDesc'

function Game() {
    return (
        <div>
            <Navbar active="1"/>
            <GameDesc/>
            <Footer/>
        </div>
    );
}
export default Game;