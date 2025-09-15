import React from 'react';
import MissionImage from '../../core/asset/home/main.webp'
import { Box, Typography, Container } from '@mui/material';

const MissionVision = () => {
    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '450px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginY: '100px',
                backgroundColor: '#f7f9fc',
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: '0px 4px 12px rgba(0,0,0,0.05)',
            }}
        >
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
                    Misión
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: 'black',
                        lineHeight: 1.7,
                        marginBottom: 4,
                        maxWidth: '700px',
                    }}
                >
                    Ayudar a empresas y organizaciones a crecer con soluciones integrales, 
                    combinando innovación digital, equipos de alto rendimiento y servicios 
                    de administración estratégica que hagan más eficientes sus procesos.
                </Typography>

                <Typography
                    variant="h3"
                    sx={{ color: 'black', fontWeight: 'bold', marginBottom: 2 }}
                >
                    Visión
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: 'black',
                        lineHeight: 1.7,
                        maxWidth: '700px',
                    }}
                >
                    Ser el aliado empresarial de confianza en México, 
                    reconocido por la calidad, innovación y excelencia 
                    de nuestros servicios, generando valor y productividad 
                    en cada proyecto.
                </Typography>
            </Container>

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
                    src={MissionImage}
                    loading="lazy"
                    alt="Nuestra misión y visión"
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderTopLeftRadius: '25px',
                        borderBottomLeftRadius: '25px',
                        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                    }}
                />
            </Box>
        </Box>
    );
};

export default MissionVision;

// import React from 'react';
// import MissionImage from '../../core/asset/home/main.webp'
// import { Box, Typography, Container } from '@mui/material';

// const MissionVision = () => {
//     return(
//         <Box 
//             sx={{
//                 width:'100%',
//                 height:'400px',
//                 marginTop:'100px',
//                 marginBottom:'100px',
//                 marginLeft:'0px',
//                 marginRight:'0px',
//                 display:'flex',
//                 flexDirection:'row',
//                 padding:'0px',
//             }}
//         >
//             <Container sx={{
//                 width: '60%',
//                 height: '400px',
//                 margin: '0px',
//                 padding: '0px',
//                 alignContent:'center'
//             }}>
//                 <Typography variant='h3' sx={{ color:'black' }}>
//                     Misión
//                 </Typography>
//                 <Typography variant='body1' sx={{ color:'black' }}>
//                     Ayudar a empresas y organizaciones a crecer con soluciones integrales, 
//                     combinando innovación digital, equipos de alto rendimiento y servicios 
//                     de administración estratégica que hagan más eficientes sus procesos.
//                 </Typography>
//                 <Typography variant='h3' sx={{ color:'black' }}>
//                     Visión
//                 </Typography>
//                 <Typography variant='body1' sx={{ color:'black' }}>
//                     Ser el aliado empresarial de confianza en México, 
//                     reconocido por la calidad, innovación y excelencia 
//                     de nuestros servicios, generando valor y productividad 
//                     en cada proyecto.
//                 </Typography>
//             </Container>
//             <Box sx={{ 
//                 width: '40%',
//                 height: '400px',
//                 overflow: 'hidden',
//             }}
//             >
//                 <Box
//                     component="img"
//                     src={ MissionImage }
//                     loading='lazy'
//                     alt="Logo de la empresa"
//                     sx={{
//                         width: '100%',
//                         height: 'auto',
//                         objectFit: 'cover',
//                         borderTopLeftRadius: '25px',
//                         borderBottomLeftRadius: '25px',
//                     }}
//                 />
//             </Box>
//         </Box>
//     );
// }

// export default MissionVision;