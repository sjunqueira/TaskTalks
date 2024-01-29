import { useRouter } from "next/router"
import { Avatar, Button, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import { Circle, Delete, GitHub, Instagram, LinkedIn, ThumbDown, ThumbUp } from "@mui/icons-material"

export default function Forum() {
  const {query} = useRouter()

  return(
    <Box
    sx={{
      width: '100%',
      height: '140px',
      '& > .MuiBox-root > .MuiBox-root': {
        p: 1,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
      },
    }}
  >
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr', 
        height: '100vh', // Definir a altura total da grade
      }}
    >
      <Box sx={{ justifyContent:'center', backgroundColor: "#000FFF", maxHeight: '4rem'  }}>Header</Box>
      <Box sx={{ display: 'grid',  justifyContent:'center'  }}>
        <Box sx={{ backgroundColor: "#c1c1f3", width: '20rem' }}>Sidebar</Box>
        <Box sx={{ backgroundColor: "#000FFF", width: '40rem' }}>Content</Box>
      </Box>
      
      <Box sx={{ justifyContent:'center', backgroundColor: "#c1c1f3", maxHeight: '4rem'}}>Footer</Box>

    </Box>
  </Box>
)
}
    
    {/*
    <Container maxWidth="lg" sx={{
      display: "grid",
      flexDirection: 'row',
      justifyContent: "center",
      objectFit: 'cover',

      }}>
      <Box>
        Header
        <img src={'logo.svg'} alt="teste"/>
      </Box>
      <Box>
       Componente do Avatar do usuário, já estilizado 
        <Box sx={{
        padding: 0.5,
        backgroundColor: '#202024',
        overflow:'hidden',
        objectFit: 'cover',
        borderRadius: '8px',
        flexDirection: 'column',
        maxHeight: '15rem'
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
            height: '4rem'
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
      <Box>
        Footer
      </Box>
    </Container>*/}
