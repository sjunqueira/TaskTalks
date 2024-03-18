import { AppBar, Box, Container, Grid } from "@mui/material"
import { useRouter } from "next/router"
import ResponsiveAppBar from "@/pages/components/ResponsiveAppBar"
import { ProfileInfo } from "@/pages/components/ProfileInfo"
import { Post } from "@/pages/components/Post"
import Layout from "../components/layout"
import { useState } from "react"


export default function Forum() {
  const {query} = useRouter()
  
  const [posts, setPosts] = useState([
    {
      id: 2,
      author:{
        avatarUrl: 'https:github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'CTO @ Rocketseat',
      },
      content: [
        { type: 'paragraph', content: "Lorem ipsum dolor sit asamet consectetur adipisicing elit. Cum, illum consequuntur? Ex debitis, illum quos nisi ducimus aspernatur dolorum a eius iste fugit molestias corporis consectetur ut ab sit repudiandae?", },
        { type: 'paragraph', content: "Lorem ipsum dolor sit amet consectetur adipisicing ggelit. Cum, illum consequuntur? Ex debitis, illum quos nisi ducimus aspernatur dolorum a eius iste fugit molestias corporis consectetur ut ab sit repudiandae?", },
        { type: 'link', content: "github.com/diego3g"},
      ],
      comments: []
    },
    {
      id: 3,
      author:{
        avatarUrl: 'https://i.pinimg.com/280x280_RS/c2/ab/8c/c2ab8c97da11e62187a755092a8e9da9.jpg',
        name: 'Priscila Silva',
        role: 'Meu amor e mãe do Bento',
      },
      content: [
        { type: 'paragraph', content: "Lorem ipsum dolor sit aasmet consectetur adipisicing elit. Cum, illum consequuntur? Ex debitis, illum quos nisi ducimus aspernatur dolorum a eius iste fugit molestias corporis consectetur ut ab sit repudiandae?", },
        { type: 'paragraph', content: "Lorem ipsum dolor sit amdaet consectetur adipisicing elit. Cum, illum consequuntur? Ex debitis, illum quos nisi ducimus aspernatur dolorum a eius iste fugit molestias corporis consectetur ut ab sit repudiandae?", },
        { type: 'paragraph', content: "Lorem ipsum dolor sit amddet consectetur adipisicing elit. Cum, illum consequuntur? Ex debitis, illum quos nisi ducimus aspernatur dolorum a eius iste fugit molestias corporis consectetur ut ab sit repudiandae?", },
        { type: 'link', content: "instagram.com/okprih"}
      ],
      comments: []

    },
    {
      id: 4,
      author:{
        avatarUrl: 'https://i.pinimg.com/564x/31/b5/8e/31b58eea2f8456733c2a6a0410ae729d.jpg',
        name: 'Bento Junqueira',
        role: 'Filho safado',
      },
      content: [
        { type: 'paragraph', content: "Lorem ipsum dolor sit amet asdconsectetur adipisicing elit. Cum, illum consequuntur? Ex debitis, illum quos nisi ducimus aspernatur dolorum a eius iste fugit molestias corporis consectetur ut ab sit repudiandae?", }
      ],
      comments: []

    },
    {
      id: 5,
      author:{
        avatarUrl: 'https://i.pinimg.com/280x280_RS/c2/ab/8c/c2ab8c97da11e62187a755092a8e9da9.jpg',
        name: 'Priscila Silva',
        role: 'Meu amor e mãe do Bento',
      },
      content: [
        { type: 'paragraph', content: "Lorem ipsum dolor sit amedt consectetur adipisicing elit. Cum, illum consequuntur? Ex debitis, illum quos nisi ducimus aspernatur dolorum a eius iste fugit molestias corporis consectetur ut ab sit repudiandae?", }
      ],
      comments: []

    },
  ]);


  return (
    <Layout>
      <Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 2
        }}>
          <Grid><ProfileInfo /></Grid>
          <Grid>
            {posts.map(posts => {
            return (
              <Post
              key={posts.id}
              author={posts.author}
              content={posts.content} 
              />
            )
          })}</Grid>

        </Box>
      </Box>
    </Layout>
    )
}

