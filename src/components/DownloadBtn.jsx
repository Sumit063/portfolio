import React from 'react'
import { Button, styled } from '@mui/material'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'

export const DownloadBtn = (props) => {
  const BtnsDownload = styled(Button)({
    padding: '12px 12px',
    fontSize: 18,
    fontFamily: 'Open sans',
    fontWeight: 600,
    textTransform: 'none',
    letterSpacing: 0.7,
    borderRadius: 7,
    backgroundColor: '#59C378',
    '&:hover': {
      backgroundColor: '#59c37941',
      borderColor: '#59c37941',
      boxShadow: 'none',
      color: '#59C378'
    },
  })
  return (
    <BtnsDownload sx={{ color: '#ffffff' }} endIcon={<FileDownloadOutlinedIcon />}>
      {' '}
      {props.btntext}
    </BtnsDownload>
  )
}