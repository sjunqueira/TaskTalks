import { Avatar, Box, Button, IconButton, Typography } from '@mui/material'
import styles from './comment.module.css'
import { useState } from 'react'
import { Circle, Delete, ThumbDown, ThumbUp } from '@mui/icons-material'


export function Comment ( {id, content, onDeleteComment, commentDate} ) {



    const [likeCount, setLikeCount] = useState(0)
    const [DislikeCount, setDislikeCount] = useState(0)

    function deleteComment(commentId) {    
        //imutabilidade -> as variaveis não sofrem mutação, nós criamos um novo valor (um novo espaço na memória)
        const commentsWithouthDeletedOne = comments.filter(comment => comment.id != commentId)
    
        setComments(commentsWithouthDeletedOne)
      }
    
      function handleDeleteComment() {
        onDeleteComment(id)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

    function handleDislikeComment() {
        setDislikeCount((state) => {
            return state + 1
        });
    }

    return (
        <Box sx={{
            display: 'flex',
            padding: '1rem',
            width: '100%',
            gap: '1rem',
        }}>
            <Avatar 
                sx={{
                    boxSizing: 'initial',
                    borderRadius: 2,
                    width:'3rem',
                    height: '3rem'
                }}
                src="https://github.com/djjun.png" />
            
            <Box sx={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column'
            }}>
                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'column',
                    borderRadius: 2,
                    lineHeight: 1.6,
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <Typography sx={{
                                display: 'block',
                                fontSize: '1rem',
                                lineHeight: '1.6'
                            }}>Dj do Arrocha</Typography>
                            <Typography sx={{
                                display: 'block',
                                fontSize: '0.75rem',
                                lineHeight: '1.4',
                                color: '#8d8d89'
                            }}>
                            2023-09-01 17:00:00
                            </Typography>
                        </Box>
                        
                        <IconButton 
                            onClick={handleDeleteComment} 
                            onDeleteComment={deleteComment} 
                            title='Deletar comentário'
                            color='primary'>
                            <Delete/>
                        </IconButton>
                        
                    </Box>

                    <Typography sx={{
                        lineHeight: '1.4rem',
                        pt: '1rem',
                        color: '#c4c4cc',
                    }}>{content}</Typography>
                </Box>
            
                <Box>
                    <Button onClick={handleLikeComment}>
                        <ThumbUp sx={{
                            mx: '0.5rem'
                        }}/>
                        Curti <Typography sx={{
                            mx: '0.5rem'
                        }}> {likeCount}</Typography>
                    </Button>
                    <Button onClick={handleDislikeComment}>
                        <ThumbDown sx={{
                            mx: '0.5rem'
                        }}/>
                        Não Curti <Typography  sx={{
                            mx: '0.5rem'
                        }}> {DislikeCount}</Typography>
                    </Button>
                </Box>

            </Box>

        </Box>
    )
}