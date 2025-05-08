import structures from "../../data";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {styled, Typography, TypographyProps} from '@mui/material';
import { useParams, Link } from 'react-router-dom';


const StyledTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
    color: theme.palette.text.secondary,
    textAlign: 'justify',
    marginBottom: theme.spacing(1),
}));

function Building() {
    const { id } = useParams();
    const building = structures[parseInt(id || '0')];

    return (
        <Container maxWidth="lg" sx={{height: '700px', mt: '20px'}}>
            {/* Навигация */}
            <Box mb={2}>
                <Typography variant="body2">
                    <Link to="/">Главная</Link> → {building.title}
                </Typography>
            </Box>
            <Card
                sx={{
                    display: 'flex'
                }}
            >
                <CardMedia
                    component="img"
                    alt={building.title}
                    image={building.img}
                />
                <Box>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            {building.title}
                        </Typography>
                        {building.description.map((item, ind) => (
                            <StyledTypography key={ind} variant="body2">
                                {item}
                            </StyledTypography>
                        ))}
                    </CardContent>
                </Box>
            </Card>
        </Container>
    );
}

export default Building;