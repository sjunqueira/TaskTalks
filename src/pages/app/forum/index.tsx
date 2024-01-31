import { AppBar, Box, Container, Grid } from "@mui/material"
import { useRouter } from "next/router"
import ResponsiveAppBar from "@/pages/components/ResponsiveAppBar"
import { ProfileInfo } from "@/pages/components/ProfileInfo"
import { Post } from "@/pages/components/Post"

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
          <Grid><ProfileInfo/></Grid>
          <Grid><Post/></Grid>

        </Box>
      </Box>
    )
}

