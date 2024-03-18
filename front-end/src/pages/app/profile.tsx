import ResponsiveAppBar from "@/pages/components/ResponsiveAppBar"
import { Box } from "@mui/material"
import { useRouter } from "next/router"
import Layout from "../components/layout"


export default function Forum() {
  const {query} = useRouter()

  return(
    <Layout>
    <Box>

        Profile
    </Box>
    </Layout>
  )
}