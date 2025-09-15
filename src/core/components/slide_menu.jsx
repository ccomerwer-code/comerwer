import React from "react";
import { useNavigate } from 'react-router-dom';
import { 
    Box, Drawer, Button, List, ListItem, 
    ListItemButton, ListItemIcon, ListItemText
  } from '@mui/material';
import { Home, FormatListBulleted, Menu } from '@mui/icons-material';

const SlideMenu = () => {
    const [option] = React.useState([
        {
            label: 'Inicio',
            key: '1',
            icon: <Home  sx={{ color:'white' }}  />,
        },
        {
            label: 'Servicios',
            key: '2',
            icon: <FormatListBulleted  sx={{ color:'white' }}  />,
        },
        {
            label: 'Clientes',
            key: '3',
            icon: <FormatListBulleted  sx={{ color:'white' }}  />,
        },
    ]);
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const onChangePage = ( label ) => {
        switch(label){
            case 'Inicio':
                navigate('/');
                break;
            case 'Servicios':
                navigate('/servicios');
                break;
            case 'Clientes':
                navigate('/clientes');
                break;
            default:
                break;
        }
    }

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={ toggleDrawer(false) } >
            <List>
                { 
                    option.map( ( object ) => (
                            <ListItem key={object.key} disablePadding>
                                <ListItemButton onClick={ () => onChangePage(object.label) }>
                                    <ListItemIcon>
                                        { object.icon }
                                    </ListItemIcon>
                                    <ListItemText primary={object.label} />
                                </ListItemButton>
                            </ListItem>
                        )
                    ) 
                }
            </List>
        </Box>
    );

    return (
        <>
            <Box sx={{
                    display: 'flex',
                    justifyContent: 'right',
                    alignItems: 'center',
                }}
            >
                <Button onClick={ toggleDrawer( true ) }>
                    <Menu sx={{ color:'white' }} />
                </Button>
                <Drawer open={ open } onClose={ toggleDrawer( false ) }
                    PaperProps={{
                        sx:{
                            backgroundColor:'#2a373e',
                            color: 'white',
                            paddingTop:'30px',
                        }
                    }}
                >
                    { DrawerList }   
                </Drawer>
            </Box>
        </>
    );

}

export default SlideMenu;