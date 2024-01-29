

import { Avatar, Paper, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box'

export function Main() {
    return (
      <Box sx={{
        width: '100vh',
        

      }}>
        <Paper sx={{
          p: 2,
          borderRadius: 2
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection:'row',
            gap: 1.5,
            alignContent: 'center'
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection:'row'
            }}>
              <Avatar alt='DJ do Rock' src='https://github.com/djjun.png' sx= {{
              width: '3rem',
              height: '3rem',
              borderRadius:2,
              border: 2,
              }}/>
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection:'column', 
              //justifyContent: 'center',
              //alignItems: 'center'
            }}>
              <Typography>DJ do Rock</Typography>
              <Typography variant='caption' sx={{
                color: '#8d8d89',
              }}>FullStack Developer</Typography>
            </Box>
          </Box>
          <Typography variant='body1' sx={{
            color: '#c4c4cc',
            mt: '1rem',
            lineHeight: '1.6rem',
            fontWeight: 'regular'
          }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus orci ac auctor augue mauris augue neque. Cursus risus at ultrices mi. Tortor vitae purus faucibus ornare suspendisse sed. Turpis egestas pretium aenean pharetra magna ac placerat. In fermentum et sollicitudin ac. Vitae congue eu consequat ac felis donec. Platea dictumst quisque sagittis purus sit. Nisi lacus sed viverra tellus in hac. Mi sit amet mauris commodo quis imperdiet massa. Non tellus orci ac auctor augue mauris. At auctor urna nunc id. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Viverra nibh cras pulvinar mattis nunc sed blandit.
          </Typography>
          <TextField sx={{
            mt: '2rem'
          }} fullWidth label="" id="fullWidth"/>
        </Paper>
      </Box>
    )
}
