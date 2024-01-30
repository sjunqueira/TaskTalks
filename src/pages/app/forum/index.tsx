import { AppBar, Box, Container, Grid } from "@mui/material"
import { useRouter } from "next/router"
import ResponsiveAppBar from "@/pages/components/AppBar/ResponsiveAppBar"
import { Sidebar } from "@/pages/components/Forum/Sidebar/SideBar"
import { Main } from "@/pages/components/Forum/Main/MainComponent"

export default function Forum() {
  const {query} = useRouter()

  return (
      <Box>
        <ResponsiveAppBar/>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 2
        }}>
          <Grid><Sidebar/></Grid>
          <Grid><Main/></Grid>

        </Box>
      </Box>
    )
}

