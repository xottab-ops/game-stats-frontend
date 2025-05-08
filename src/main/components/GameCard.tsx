import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

interface ComponentProps {
    building: {
        img: string,
        title: string,
        description: string[],
    };
    index: number;
}

const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    textAlign: 'justify',
    marginBottom: theme.spacing(1.5),
}));

function GameCard({ building, index }: ComponentProps) {
    const isEven = index % 2 === 0;

    return (
        <Card sx={{ display: 'flex', flexDirection: isEven ? 'row' : 'row-reverse' }}>
            <CardMedia
                component="img"
                alt={building.title}
                image={building.img}
                sx={{ width: '50%', objectFit: 'cover' }}
            />
            <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {building.title}
                    </Typography>
                    {building.description.map((item, i) => (
                        <StyledTypography key={i} variant="body2">
                            {item}
                        </StyledTypography>
                    ))}
                </CardContent>
                <CardActions sx={{ justifyContent: isEven ? 'flex-end' : 'flex-start', px: 2, pb: 2 }}>
                    <Button size="small">Подробнее</Button>
                </CardActions>
            </Box>
        </Card>
    );
}
export default GameCard;