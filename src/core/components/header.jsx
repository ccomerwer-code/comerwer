import LogoPicture from '../asset/logo/Logo.webp';
import { Box, AppBar, Toolbar } from '@mui/material';
// import SlideMenu from "./slide_menu";
import TapMenu from './tap_menu';

function Header() {
    return (
        <AppBar position="static" style={{ backgroundColor:'#01080e' }} >
            <Toolbar sx={{
                width: '100%',
                maxWidth: '100%',
                boxSizing: 'border-box',
                justifyContent:'center',
            }}>
                {/* <SlideMenu/> */}

                <Box sx={{ 
                    width: '40px',
                    height: '40px',
                    overflow: 'hidden',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                >
                    <Box
                        component="img"
                        src={ LogoPicture }
                        alt="Logo de la empresa"
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </Box>

                <Box sx={{ width:'50px' }} />

                <TapMenu/>
                
            </Toolbar>
        </AppBar>
    );
}

export default Header;