import ResponsiveAppBar from "@/pages/components/ResponsiveAppBar"
import { Box } from "@mui/material"
import { useRouter } from "next/router"


export default function Forum() {
  const {query} = useRouter()

  return(
    <Box>
        <ResponsiveAppBar/>
        Profile
    </Box>
  )
}