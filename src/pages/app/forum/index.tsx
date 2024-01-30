import { AppBar, Box, Container, Grid } from "@mui/material"
import { useRouter } from "next/router"
import ResponsiveAppBar from "@/pages/components/AppBar/ResponsiveAppBar"
import { Sidebar } from "@/pages/components/Forum/Sidebar/SideBar"
import { Main } from "@/pages/components/Forum/Main/MainComponent"

export default function Forum() {
  const {query} = useRouter()

  const posts = [
    {
      id: 1,
      author:{
        avatarUrl: 'https://media.licdn.com/dms/image/D4D03AQEjMnQLn6rNWA/profile-displayphoto-shrink_400_400/0/1691446946473?e=1698883200&v=beta&t=Q_bjGptrvV2zEaXjU-3FXFb5UUkFfvv45UYAllk66us',
        name: 'Sergio Junqueira',
        role: 'Web Developer',
      },
      content: [
        { type: 'paragraph', content: 'Cara, muito massa isso, esse é o primeiro paragrafo dinâmico'}, 
        { type: 'paragraph', content: 'Já esse aqui é o segundo paragrafo dinamico e que pode estar vindo do banco de dados'},
        { type: 'link', content: 'github.com/sjunqueira'},
      ],
    },
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
    },
    
  
  
  ];
  

  return (
      <Box>
        <ResponsiveAppBar/>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 2
        }}>
          <Grid><Sidebar/></Grid>
          <Grid>
            <Box>
            {posts.map(posts => {
              return (
                <Main
                author={posts.author}
                content={posts.content} 
                />
              )
            })}
            </Box>
            </Grid>

        </Box>
      </Box>
    )
}

