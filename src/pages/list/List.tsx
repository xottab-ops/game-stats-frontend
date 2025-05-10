import Navbar from "../../components/Navbar";
import GameGrid from "./components/GameGrid";
import Footer from "../../components/Footer"

function List(){
    return (
        <div>
            <Navbar active="2"/>
            <GameGrid />
            <Footer />
        </div>
    );
}

export default List;