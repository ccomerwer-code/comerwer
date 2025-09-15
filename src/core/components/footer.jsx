import * as React from 'react';
import { Box, Typography, Divider } from '@mui/material';

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor:'#01080e', 
        color: 'white', 
        p: 4, 
        textAlign: 'center'
      }}
    >
      <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
        Dirección: Av. Segovia #46, Colonia Atlanta 2ª Sección, C.P. 54740, Cuautitlán Izcalli, México.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontWeight: 500 }}>
        Tel: 55 4766 5378
      </Typography>

      <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)', my: 2 }} />

      <Typography variant="body2" sx={{ color:'#CCCCCC' }}>
        COMER WER. Todos los derechos reservados. © {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}
