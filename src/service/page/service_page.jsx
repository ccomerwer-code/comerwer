import * as React from 'react';
import { Typography, Container, Box, Card, CardMedia } from '@mui/material';
import { List } from 'antd';
import ImageService from '../../core/asset/service/service.webp';

function ServicePage() {
  const actividadesEconomicas = [
    'Comercio al por mayor de maquinaria y equipo para la construcción y la minería, ofreciendo soluciones de calidad que apoyan el desarrollo de proyectos de gran envergadura.',
    'Servicios de administración de negocios, orientados a mejorar la organización, eficiencia y control de las operaciones de empresas e instituciones.',
    'Comercio al por mayor de mobiliario y equipo de oficina, con el propósito de habilitar espacios de trabajo modernos, funcionales y productivos.'
  ];

  const serviciosEspecializados = [
    'Escaneo, indexación y organización de documentos, garantizando la correcta digitalización y clasificación de grandes volúmenes de información.',
    'Software de gestión documental, diseñado para optimizar la administración, consulta y resguardo de archivos.',
    'Integración con sistemas existentes, asegurando una transición armónica hacia entornos digitales más eficientes.',
    'Solución de almacenamiento en la nube, que brinda seguridad, disponibilidad y respaldo a la información institucional.',
    'Implementación de medidas de seguridad y protección de datos, para garantizar la confidencialidad e integridad de la información.',
    'Capacitación de personal, con programas especializados que aseguran el uso adecuado y provechoso de las herramientas tecnológicas.'
  ];

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">

      {/* Main content */}
      <Container sx={{ flexGrow: 1, py: 6 }}>
        {/* Imagen principal */}
        <Card sx={{ mb: 6, boxShadow: 3 }}>
          <CardMedia
            component="img"
            height="400"
            image={ImageService}
            alt="Servicios COMER WER"
          />
        </Card>

        {/* Introducción */}
        <Box mb={6}>
          <Typography variant="h4" gutterBottom>
            Nuestros Servicios
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            En <strong>COMER WER</strong> somos una empresa con experiencia en la prestación de servicios y soluciones integrales que fortalecen los procesos estratégicos y operativos de nuestros clientes. Nuestro portafolio se basa en una sólida combinación de actividades económicas y servicios especializados, que nos permite atender de manera eficiente y confiable a distintos sectores productivos.
          </Typography>
        </Box>

        {/* Actividades económicas */}
        <Box mb={6}>
          <Typography variant="h5" gutterBottom>
            Actividades económicas
          </Typography>
          <List
            dataSource={actividadesEconomicas}
            renderItem={(item) => <List.Item>{item}</List.Item>}
            bordered
            style={{ background: '#f5f5f5', borderRadius: 8 }}
          />
        </Box>

        {/* Servicios especializados */}
        <Box mb={6}>
          <Typography variant="h5" gutterBottom>
            Servicios especializados
          </Typography>
          <List
            dataSource={serviciosEspecializados}
            renderItem={(item) => <List.Item>{item}</List.Item>}
            bordered
            style={{ background: '#f5f5f5', borderRadius: 8 }}
          />
        </Box>

        {/* Nuestro compromiso */}
        <Box mb={6}>
          <Typography variant="h5" gutterBottom>
            Nuestro compromiso
          </Typography>
          <Typography variant="body1" color="text.secondary">
            La experiencia de <strong>COMER WER</strong> se refleja en la capacidad de atender proyectos complejos mediante un enfoque integral que une tecnología, equipamiento y asesoría estratégica. Nuestra prioridad es ofrecer servicios confiables, innovadores y de alta calidad, que aporten valor a cada cliente y fortalezcan sus procesos de crecimiento y modernización.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default ServicePage;


// import * as React from 'react';
// import ImageService from '../../core/asset/service/service.webp'

// function ServicePage(){
//     return (
//         <>
//             Service
//         </>
//     );    
// }

// export default ServicePage;