import { Box, Typography } from '@mui/material';

function Footer() {
    return (
        <Box
            sx={{
                mt: 6,
                py: 3,
                px: 2,
                backgroundColor: '#f5f5f5',
                textAlign: 'center',
            }}
        >
            <Typography variant="body2" color="text.secondary">
                © Топовые игры Эвер. Все права защищены.
            </Typography>
        </Box>
    );
}

export default Footer;