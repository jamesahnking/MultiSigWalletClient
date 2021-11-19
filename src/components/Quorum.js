import { makeStyles, Card, List, ListItem, Avatar } from '@material-ui/core';
import { CardContent, ListItemText, Typography, IconButton, CardHeader } from '@material-ui/core'
import React from 'react';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import Divider from '@mui/material/Divider';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';


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


function SimpleDialog(props) {
    const {onClose, selectedValue, open } = props

    const handleClose = () => {
        onClose(selectedValue)
    }

    const handleListItemClick = (value) => {
        onClose(value)
    }

        return (
            <Dialog onClose={handleClose} open={open}>
            <DialogTitle>
                What is a Quorum? 
            </DialogTitle>

            <List> 
                <ListItem button onClick={() => handleListItemClick('test')}>
                    <ListItemText primary='The minimum number of designated addresses that must approve a transfer before it can be sent to a recipient.'/> 
                    
                </ListItem>
            </List>
        </Dialog>
    )
}

  const Quorum = ({ quorum, approvers }) => {
    // Modal Constants
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // const classes = useStyles()
    const theme = useTheme();
    const classes = useStyles()

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
                    <IconButton aria-label="settings" onClick={ handleOpen }> 
                    <HelpOutlineIcon />
                    </IconButton>
                }
                title="Quorum:"
                subheader={ quorum }
             /> {/* CardHeader end */}
            
            <SimpleDialog 
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            
            /> 
            
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
