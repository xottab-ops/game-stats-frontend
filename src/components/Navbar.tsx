import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import {Link} from 'react-router-dom';
import React from "react";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    border: '1px solid',
    borderColor: theme.palette.divider,
    padding: '8px 12px',
}));

interface ComponentProps {
    active: string;
}

const HoverableMenuItem = styled(MenuItem)(({ theme }) => ({
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
}));

function Navbar({ active }: ComponentProps) {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    return (
        <AppBar
            position="static"
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                mt: '28px',
            }}
        >
            <Container maxWidth="xl">
                <StyledToolbar>
                    <Typography variant="h6" sx={{ color: '#5d8aa8' }}>
                        Самые высокие здания и сооружения
                    </Typography>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Link to="/">
                            <Button variant={active === "1" ? "contained" : "text"}
                                    color="info"
                                    size="medium">
                                Главная
                            </Button>
                        </Link>
                        <Link to="/list">
                            <Button
                                variant={active === "2" ? "contained" : "text"}
                                color="info"
                                size="medium">
                                Список зданий
                            </Button>
                        </Link>
                        <Link to="/charts">
                            <Button
                                variant={active === "3" ? "contained" : "text"}
                                color="info"
                                size="medium">
                                Диаграммы
                            </Button>
                        </Link>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }}}>
                        <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="top"
                            open={ open }
                            onClose={toggleDrawer(false)}
                        >

                            <Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <IconButton onClick={toggleDrawer(false)}>
                                        <CloseRoundedIcon />
                                    </IconButton>
                                </Box>
                                <Link to="/">
                                    <HoverableMenuItem selected={active === "1"}>Главная</HoverableMenuItem>
                                </Link>
                                <Link to="/list">
                                    <HoverableMenuItem selected={active === "2"}>Список зданий</HoverableMenuItem>
                                </Link>
                                <Link to="/charts">
                                        <HoverableMenuItem selected={active === "3"}>Диаграммы</HoverableMenuItem>
                                </Link>



                            </Box>
                        </Drawer>
                    </Box>
                </StyledToolbar>
            </Container>

        </AppBar>
    )
}
export default Navbar;