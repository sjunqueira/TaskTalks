

import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import { Comment } from './CommentComponent'
import BasicModal from './Modal'
import { ProfileInfo } from './ProfileInfo'



export function Post() {

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

  
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  function handleNewPost(newPost) {
    setPosts([newPost, ...posts]); // Adiciona o novo post ao estado dos posts
    handleClose()

  }


  const [comments, setComments] = useState([]) // Const que tem os comentários (comments) e também tem um "listener" que está dentro de uma function (handleCreateNewComment)
  const [newCommentText, setNewCommentText] = useState('') 
  
  function handleNewCommentChange() { //Function que fica vendo se o comentário está sendo modificado
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value) //Altera o CommentText para o que está na textarea
    console.log(newCommentText)
  } 

  function handleCreateNewComment() { //function que lida com a parte de criacao do novo comentário
    event.preventDefault() //Previne que a página atualize e o state seja perdido

    const currentTime = new Date();
    const newComment = {
      id: new Date().getTime(), // Ou você pode usar alguma lógica para gerar IDs únicos
      content: newCommentText,
      timestamp: currentTime,
    };

    setComments([...comments, newComment]); // Pega todos os comentários que estáo na const comments através do spread (...) e adiciona o NewCommentText
    setNewCommentText('') //Redefine o conteudo da minha textarea atraves da tag value que está nela (Devido a const acima estar escutando isso)

  }

  function handleEnterPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      // Verifica se a tecla pressionada é "Enter" sem a tecla Shift
      handleCreateNewComment(event);

      //console.log(comments)

      event.target.blur()
    }
  }

  function deleteComment(commentId) {    
    //imutabilidade -> as variaveis não sofrem mutação, nós criamos um novo valor (um novo espaço na memória)
    const commentsWithouthDeletedOne = comments.filter(comment => comment.id != commentId)

    

    setComments(commentsWithouthDeletedOne)

 
  }

  //console.log("posts:", posts);
  //console.log(posts)
  //console.log(comments)
  const isNewCommentEmpty = newCommentText.length == 0

    return (
      <Box sx={{
        width: '100vh',
      }}>
        <Button variant='contained' sx={{
        width: 1,
        p: '1rem',
        mb: '1rem',
        borderRadius:3
        }}
        onClick={handleOpen}>
        Criar novo post</Button>
        <BasicModal open={open} handleClose={handleClose} onNewPost={handleNewPost} />
        
        {posts.map((post) => (
          <Paper
            key={post.id}
            sx={{
              p: 2,
              borderRadius: 2,
              mb: 2, // ajuste a margem conforme necessário
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 1.5,
                alignContent: 'center',
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Avatar
                  src={post.author.avatarUrl}
                  sx={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: 2,
                    border: 2,
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography>{post.author.name}</Typography>
                <Typography variant="caption" sx={{ color: '#8d8d89' }}>
                  {post.author.role}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{
                color: '#c4c4cc',
                mt: '1rem',
                lineHeight: '1.6rem',
                fontWeight: 'regular',
              }}
            >
              {post.content.map((contentItem, index) => (
                <span key={index}>{contentItem.content}</span>
              ))}
            </Typography>
          </Box>
          <Grid container sx={{
            alignItems: 'end',
            justifyContent: 'flex-end'
          }}>
            <Grid item xs={12}>
              <TextField sx={{
                mt: '2rem',
                '& button': {
                  visibility: isNewCommentEmpty ? 'hidden' : 'visible',
                  transition: 'background-color 0.2s color 0.2s',
                }
              }} fullWidth label="" id="fullWidth"
              placeholder="Deixe um comentário"
              value={newCommentText}
              onChange={(event) => handleNewCommentChange(post.id, event)}
              onKeyDown={handleEnterPress}
              onSubmit={handleCreateNewComment}
              multiline
              minRows={3}
              maxRows={4}
              required/>
            </Grid>
            <Grid>
              <Button variant='contained' sx={{
                pt: 1,
                mt: 1.5,
                visibility: isNewCommentEmpty ? 'hidden' : 'visible',
                '&:focus-within': {
                  visibility: 'visible',
                }}
              }
              onClick={() => handleCreateNewComment(post.id)}
              disabled={isNewCommentEmpty}>
                Comentar</Button>
            </Grid>
            
          </Grid>
          <Box>
          {comments.map(comment => {
            return (
              <Comment 
                key={comment.id} 
                id={comment.id}
                content={comment.content} 
                commentDate={comment.timestamp}
                onDeleteComment={deleteComment}
              />
            )
          })}
        </Box>

              

      
        </Paper>
        ))}
        </Box>
      
    )
}
