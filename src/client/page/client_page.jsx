import * as React from 'react';
import StateImages from '../../core/asset/state/index';
import StateCard from '../components/state_information';
import { Box, Container, Typography } from '@mui/material';

function ClientPage(){

    const stateInfo = [
        ["Michoacán de Ocampo", StateImages.MichoacanImage],
        ["Morelos", StateImages.MorelosImage],
        ["Quintana Roo", StateImages.QuintanaRooImage],
        ["Estado de México", StateImages.EstadoMexicoImage],
        ["Veracruz", StateImages.VeracruzImage],
    ];

    return (
        <>
            <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingY: "60px",
                backgroundColor: "#fafafa",
            }}
            >
                <Container sx={{ marginBottom: "40px" }}>
                    <Typography
                    variant="h4"
                    align="center"
                    sx={{ fontWeight: "bold", marginBottom: 4 }}
                    >
                    Los clientes que confían en nuestro talento
                    </Typography>
                </Container>

                <Container
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "30px",
                    }}
                >
                    {stateInfo.map(( [state, image], index ) => (
                        <StateCard key={index} state={state} image={image} />
                    ))}
                </Container>
            </Box>
        </>
    );    
}

export default ClientPage;