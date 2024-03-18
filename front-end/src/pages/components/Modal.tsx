import { Box, Button, TextField, Typography, Modal } from '@mui/material'
import React, { useState } from 'react'

export default function BasicModal({ open, handleClose, onNewPost, handleEnterPress }) {
    const CategoriesTags = [{ tagName: 'categoria1' }, { tagName: 'categoria2' }];
    /*const [newPost, setNewPost] = React.useState({ author: { avatarUrl: '', name: '', role: '' }, content: '' });*/
  
  
    const [newPostText, setNewPostText] = React.useState('') 
    
    function handleNewPostChange(event) {
      event.target.setCustomValidity('');
      setNewPostText(event.target.value);
      console.log(newPostText);
    }
    
    function handleCreateNewPost() {
      const newPost = {
        id: new Date().getTime(), // ID único com base no timestamp
        author: {
          avatarUrl: 'https://github.com/sjunqueira.png', // Avatar URL do autor (você pode mudar isso)
          name: 'Sergio Junqueira', // Nome do autor (você pode mudar isso)
          role: 'Web Developer', // Papel do autor (você pode mudar isso)
        },
        content: [
          { type: 'paragraph', content: newPostText }, // Conteúdo da postagem
        ],
        comments: []
      };
      console.log(newPost)
      onNewPost(newPost)
    }
    
  
      return (
        <Modal sx={{
            display: 'flex',
            gap:'5rem',
            justifyContent: 'space-between'
        }}
        open={open}
        onClose={handleClose}

      >
        <Box
          sx={{
            position: 'absolute',
            top: '35%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
            minHeight: '20%',
            maxHeight: '60%',
            bgcolor: 'background.paper',
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
            p: 4,
            borderRadius: 8,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Compartilhe sua dúvida
          </Typography>
          <TextField
            sx={{
              mt: '2rem',
              '& button': {
                transition: 'background-color 0.2s color 0.2s',
              },
            }}
            fullWidth
            label=""
            id="fullWidth"
            placeholder="Escreva aqui a sua dúvida"
            multiline
            minRows={6}
            maxRows={15}
            required
            onChange={handleNewPostChange}
          />
  
          <Button variant="contained" sx={{ mt: '2rem', width: '100%'}} onClick={handleCreateNewPost} onKeyDown={handleEnterPress} >
            Publicar
          </Button>
        </Box>
      </Modal>
      );
    }
  