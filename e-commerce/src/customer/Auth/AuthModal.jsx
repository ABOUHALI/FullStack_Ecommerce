import { Box, Modal, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import FormRegister from './FormRegister';
import { useLocation } from 'react-router-dom';
import {useSelector} from "react-redux";
import FormLogin from './FormLogin';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline:'none',
  boxShadow: 24,
  p: 4,
};
const AuthModal = ({handleClose,open}) => {
  const location=useLocation();
  const {auth}=useSelector((store)=>store);
  useEffect(()=>{
    if(auth.user)handleClose();

  },[auth.user])
  return (
    <div><Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      {location.pathname==="/login"?<FormLogin/>:<FormRegister/>}
      
    </Box>
  </Modal></div>
  )
}

export default AuthModal