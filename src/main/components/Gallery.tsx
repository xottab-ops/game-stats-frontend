import gamesDescription from "../../data";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Link } from "react-router-dom";

const imgData=gamesDescription.slice(0, -1);


function Gallery() {
    return (
        <Container maxWidth="lg">
            <Box sx={{ height: 585, overflowY: 'scroll', m: '20px auto'}}>
                <ImageList variant="masonry"
                           sx={{
                               columnCount: {
                                   xs: '1 !important',
                                   sm: '2 !important',
                                   md: '3 !important',
                                   lg: '4 !important',
                               },
                           }}

                           cols={ 4 } gap={ 8 }>
                    {imgData.map((item, index) => (
                        <Link key={ index } to={ "/game/" + index }>
                            <ImageListItem key={ item.img }>
                                <img
                                    srcSet={ item.img }
                                    src={ item.img }
                                    alt={ item.title }
                                    loading="lazy"
                                />
                                <ImageListItemBar position="bottom" title={ item.title } />
                            </ImageListItem>
                        </Link>
                    ))}


                </ImageList>
            </Box>
        </Container>
    );
}

export default Gallery;