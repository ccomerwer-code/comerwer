import React, { useEffect } from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList } from '@mui/lab';
import { useNavigate, useLocation } from 'react-router-dom';

const TapMenu = () => {
    const navigate = useNavigate();
    const location = useLocation(); // <--- Hook para obtener la ruta actual
    const [value, setValue] = React.useState('1');

    // Sincroniza el tab con la ruta
    useEffect(() => {
        console.log(location.pathname)
        switch(location.pathname) {
            case '/':
                setValue('1');
                break;
            case '/servicios':
                setValue('2');
                break;
            case '/clientes':
                setValue('3')
                break;
            case '/login': // opcional: si quieres que login no cambie tab, no pongas esto
                setValue('3');
                break;
            default:
                setValue('1');
        }
    }, [location.pathname]);

    const handleChangePage = ( numberLabel ) => {
        switch(numberLabel){
            case '1':
                navigate('/');
                break;
            case '2':
                navigate('/servicios');
                break;
            case '3':
                navigate('/clientes');
                break;
            default:
                break;
        }
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
        handleChangePage(newValue);
    };

    return(
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="taps para navegar entre paginas">
                    <Tab label="Inicio" value="1" style={{ color:'white' }} />
                    <Tab label="Servicios" value="2" style={{ color:'white' }}/>
                    <Tab label="Clientes" value="3" style={{ color:'white' }} onClick={() => navigate('/clientes')}/>
                </TabList>
            </Box>
        </TabContext>
    );
}

export default TapMenu;
