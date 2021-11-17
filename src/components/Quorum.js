import { makeStyles, Card, List, ListItem, ListItemAvatar, Avatar, ListItemIcon } from '@material-ui/core';
import { CardContent, ListItemText, Typography, IconButton, CardHeader,Paper } from '@material-ui/core'
import React from 'react';
import { Box } from '@mui/system';
import { styled, useTheme } from '@mui/material/styles';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Grid from '@mui/material/Grid';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import Divider from '@mui/material/Divider';
import Approvers from './Approvers';
import CheckIcon from '@mui/icons-material/Check';
import { spacing } from '@mui/system';



// import { IconButton } from '@material-ui/core';
// import { DeleteOutlined } from '@material-ui/icons';
// import { yellow, pink, green, blue } from '@material-ui/core/colors'

// Quorum: The amount of approvals needed to make a transaction valid.

  const useStyles = makeStyles((theme) => {
    return {
        root:{
            color: '#ffffff'
        },
        
            quorumBackground: {
                background: '#ede6f6'
            },
            linearGradient: {
                background: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
            },
            avatar: {
                background: '#181c1f'
            },
            whiteType: {
                color: '#fff'
            }

        }
  })
  
  const Quorum = ({ quorum, approvers }) => {

    // const classes = useStyles()
    const theme = useTheme();
    const classes = useStyles()

    const walletAddress= approvers[0]


    return (
        <Box sx={{ width: 1 }} >    
            <Card className={classes.linearGradient}>

        <Box >

            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" variant="rounded" className={classes.avatar}>
                         <HowToVoteIcon />
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings" >
                    <HelpOutlineIcon />
                    </IconButton>
                }
                title="Quorum:"
                subheader={ quorum }
             /> {/* CardHeader end */}
               
            </Box>




                <CardContent>

                    <Typography variant="h6" >
                        Approvers:
                    </Typography>

                
                    {approvers.map(approver => (
                        <Box sx={{ my:1 }}>
                        <Typography key={approver.id} variant="body2" noWrap sx={{ marginTop: '20px'}} >
                            {approver}
                            <Box sx={{ my:1 }}>             
                                <Divider ></Divider>
                            </Box>
                        </Typography>
                        </Box>
                    ))}
                

                </CardContent>
            </Card>
        </Box>
    );
  }


  export default Quorum

  /* 
  
           <Card>
             <CardContent>
                        <Box>
                            <Typography variant='overline'>
                                Quorum:
                            </Typography>
                         </Box>
                         <Box>
                            <Box >
                                <Typography variant='h5'>
                                {quorum} Signatures
                                </Typography>                        
                            </Box>
                         </Box>
                </CardContent>
            </Card>  
  
  
  
  
  */