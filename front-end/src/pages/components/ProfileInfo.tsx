import { Autocomplete, Avatar, Button, Chip, Modal, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import * as React from 'react'

import { Edit, EditOutlined, GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import { Container } from '@mui/system'


//A partir daqui está OK
export function ProfileInfo() {


    return (
      <Container>
      <Box>
        <Box sx={{
        backgroundColor: '#202024',
        overflow:'hidden',
        objectFit: 'cover',
        borderRadius: '8px',
        flexDirection: 'column',
        maxHeight: '18rem',
        maxWidth: '20rem',

        }}>
        <Box component={'img'} sx={{
          height: '72px',
          width: '100%',
          objectFit: 'cover',
          borderRadius: 2,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
          }} 
          alt="test" 
          src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=50"/>
        
        <Box sx={{
          alignContent: "center",
          backgroundColor: '#202024',
          color: '#e1e1e6',
          justifyContent: "center",
          alignItems: 'center',
          margin: 'auto',
          display: 'flex',
          marginTop: -3,
          flexDirection: 'column', 
          overflow: 'hidden',
          gap: '0.25rem',
          paddingBottom: '1rem',
          borderRadius: 2
          }}>
          <Avatar alt='Sergio Junqueira' src='https:github.com/sjunqueira.png' sx= {{
            width: '4rem',
            height: '4rem',
            borderRadius: 100
          }}/>
          <strong>Sergio Junqueira</strong>
          <span>Web Developer</span>
          <Box sx={{
            gap: '0.25rem'
          }}>
            <Button><GitHub/></Button>
            <Button><LinkedIn/></Button>
            <Button><Instagram/></Button>
          </Box>
        
        </Box>
        </Box>
      
      </Box>
      </Container>
    )
}
