

import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useState } from 'react'
import { Comment } from './CommentComponent'

export function Main() {
  const [comments, setComments] = useState([]) // Const que tem os comentários (comments) e também tem um "listener" que está dentro de uma function (handleCreateNewComment)
  const [newCommentText, setNewCommentText] = useState('') 
  
  function handleNewCommentChange() { //Function que fica vendo se o comentário está sendo modificado
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value) //Altera o CommentText para o que está na textarea
  } 

  function handleCreateNewComment() { //function que lida com a parte de criacao do novo comentário
    event.preventDefault() //Previne que a página atualize e o state seja perdido

    const currentTime = new Date();
    const newComment = {
      id: comments.length + 1, // Ou você pode usar alguma lógica para gerar IDs únicos
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

      console.log(comments)

      event.target.blur()
    }
  }

  function deleteComment(commentId) {    
    //imutabilidade -> as variaveis não sofrem mutação, nós criamos um novo valor (um novo espaço na memória)
    const commentsWithouthDeletedOne = comments.filter(comment => comment.id != commentId)

    

    setComments(commentsWithouthDeletedOne)

 
  }

  console.log(comments)
  const isNewCommentEmpty = newCommentText.length == 0

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
          <Box>
            <Typography variant='body1' sx={{
            color: '#c4c4cc',
            mt: '1rem',
            lineHeight: '1.6rem',
            fontWeight: 'regular'
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus orci ac auctor augue mauris augue neque. Cursus risus at ultrices mi. Tortor vitae purus faucibus ornare suspendisse sed. Turpis egestas pretium aenean pharetra magna ac placerat. In fermentum et sollicitudin ac. Vitae congue eu consequat ac felis donec. Platea dictumst quisque sagittis purus sit. Nisi lacus sed viverra tellus in hac. Mi sit amet mauris commodo quis imperdiet massa. Non tellus orci ac auctor augue mauris. At auctor urna nunc id. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Viverra nibh cras pulvinar mattis nunc sed blandit.
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
              onChange={handleNewCommentChange}
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
              onClick={handleCreateNewComment}
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
        
      </Box>
    )
}
