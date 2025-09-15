import * as React from 'react';
import { Box, Typography, IconButton, Modal, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
  p: 4,
  outline: 'none',
};

export default function BasicModal({ open, onClose, title, body }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
      BackdropProps={{ style: { backgroundColor: 'rgba(0,0,0,0.35)' } }}
    >
      <Box sx={style}>
        {/* Botón de cerrar */}
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', top: 8, right: 8, color: 'grey.600' }}
        >
          <CloseIcon />
        </IconButton>

        {/* Título */}
        <Typography 
          id="modal-modal-title" 
          variant="h6" 
          component="h2"
          sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}
        >
          {title}
        </Typography>

        {/* Contenido */}
        <Typography 
          id="modal-modal-description" 
          sx={{ mt: 1, color: 'text.secondary', fontSize: 15, lineHeight: 1.6 }}
        >
          {body}
        </Typography>

        {/* Botón aceptar */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={onClose}
            sx={{ textTransform: 'none' }}
          >
            Aceptar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

// import * as React from 'react';
// import { Box, Typography, Modal } from '@mui/material'

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default function BasicModal({ open, onClose, title, body }) {
//   return (
//     <Modal
//       open={open}
//       onClose={onClose}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//     >
//       <Box sx={style}>
//         <Typography id="modal-modal-title" variant="h6" component="h2">
//           {title}
//         </Typography>
//         <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//           {body}
//         </Typography>
//       </Box>
//     </Modal>
//   );
// }
