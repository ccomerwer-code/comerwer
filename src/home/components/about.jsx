import React from 'react';
import AboutImage from '../../core/asset/home/about.webp'
import { Box, Typography, Container } from '@mui/material';

const About = () => {
    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '450px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginY: '100px',
                backgroundColor: 'white',
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
            }}
        >
            {/* Imagen lateral */}
            <Box
                sx={{
                    width: '40%',
                    height: '100%',
                    overflow: 'hidden',
                }}
            >
                <Box
                    component="img"
                    src={AboutImage}
                    alt="Sobre nosotros"
                    loading="lazy"
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </Box>

            {/* Texto */}
            <Container
                sx={{
                    width: '60%',
                    height: '100%',
                    padding: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="h3"
                    sx={{ color: 'black', fontWeight: 'bold', marginBottom: 2 }}
                >
                    ¿Quiénes somos?
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        color: 'black',
                        lineHeight: 1.7,
                        maxWidth: '700px',
                    }}
                >
                    Somos una empresa integral que combina innovación tecnológica y soluciones
                    estratégicas para impulsar el desarrollo de negocios en distintos sectores.
                    Prestamos servicios especializados en almacenamiento de documentos en la nube,
                    comercio al por mayor de maquinaria y equipo para la construcción y la minería,
                    administración de negocios, así como comercio al por mayor de mobiliario y
                    equipo de oficina. <br /><br />
                    Nuestra fortaleza radica en la diversificación y en la capacidad de ofrecer a
                    nuestros clientes soluciones confiables, seguras y adaptadas a sus necesidades
                    operativas, con un enfoque en eficiencia, transparencia y crecimiento sostenible.
                </Typography>
            </Container>
        </Box>
    );
};

export default About;