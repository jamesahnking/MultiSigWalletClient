import { makeStyles, Card, Container, CardContent, CardHeader, IconButton } from '@material-ui/core';
import React from 'react';
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import { ListItemText } from '@material-ui/core';
import { Box } from '@mui/system';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

// import { IconButton } from '@material-ui/core';
// import { DeleteOutlined } from '@material-ui/icons';
// import { yellow, pink, green, blue } from '@material-ui/core/colors'

// Quorum: The amount of approvals needed to make a transaction valid.
const useStyles = makeStyles((theme) => {
    return {
        avatar: {
            marginLeft: theme.spacing(0)
        },
        quorumBackground:{
            background: '#e3f2fd'
        },
        quorumText: {
            marginLeft: theme.spacing(1)
        },
        boxWdith: {
            width: theme.spacing(1)
        },
        boxTitle: {
            
        }
        
    }
  })

const Quorum = ({ quorum }) => {

    const classes = useStyles()

    return (
        <Box
        sx = {{ width: 1}}
        >
        <Card className={classes.root}>
        <CardHeader
        //   avatar={
        //     <Avatar aria-label="recipe" className={classes.avatar}>
        //       <HowToVoteIcon />
        //     </Avatar>
        //   }
          action={
            <IconButton aria-label="settings">
              <HelpOutlineIcon />
            </IconButton>
          }
          title="Quorum:"
          subheader={ quorum}
        />
      </Card>
      </Box>
    )
}

export default Quorum
    
