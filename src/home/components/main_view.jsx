import React from 'react';
import Logo from '../../core/asset/logo/Comerwer.webp'
import { Box, Container, Typography } from '@mui/material';

const MainView = () => {
    return(
        <Container
            sx={{
                minHeight: "80vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                background: "linear-gradient(135deg, #0a192f, #1e3c72)", // azul oscuro degradado
                color: "white",
                borderRadius: "0 0 2rem 2rem",
            }}
        >
            <Box
                component="img"
                src={Logo}
                alt="Logo de la empresa"
                sx={{ width: "250px", mb: 3 }}
            />
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                Innovación tecnológica y soluciones estratégicas
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: "600px" }}>
                Impulsamos el crecimiento empresarial con servicios digitales y estratégicos de vanguardia.
            </Typography>
        </Container>
    );
}

export default MainView;