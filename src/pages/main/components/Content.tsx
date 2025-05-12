import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import GameCard from "./GameCard"
import gamesDescription from "../../../data";
const cardData = [gamesDescription[3], gamesDescription[6], gamesDescription[9], gamesDescription[7]]


function Content() {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={{ xs: 3, md: 6 }}>
                {cardData.map((item, index) => (
                    <Grid key={index} size={{ xs: 12, md: 6 }} >
                        <GameCard building={ item } index={ index }/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
export default Content;
