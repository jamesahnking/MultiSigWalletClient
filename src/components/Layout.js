import { Toolbar, AppBar, makeStyles, Card } from '@material-ui/core';
import React, {useEffect, useState } from 'react';
import { Drawer, Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import Quorum from '../components/Quorum.js';
import Stack from '@mui/material/Stack';
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons';
import { format } from 'date-fns';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import { ListItemIcon } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import CreateNewTransfer from '../components/CreateNewTransfer.js'
import LogoSection from '../components/LogoSection'
import { styled } from '@mui/material/styles';
import TableRowsIcon from '@mui/icons-material/TableRows';

// import { useLocation } from 'react-router';
// import { useHistory } from 'react-router-dom';

/* 
Layout Component: 
https://youtu.be/DSuJLPRsdZQ

THE MOST IMPORTANT FILE ;-)

Layout will be the housing for your components and allow for you to 
easily separate Components on the page

Layout doesnt show children unless declared in a 'children' prop 

Add content above and below content with a layout comoponent

the content remains the same 

List and LIstItems:
https://youtu.be/CNh3Q_z9GSw

List - <ol> or <ul> tag
ListItem - <li>
ListItemIcon - For icons
ListItemText - For Txt

menuItems
each item is represented by an  object in the array

Toolbar: 
https://youtu.be/0WbrOfmvjvU


Avatars:
https://youtu.be/gEbSx5CCgSc

*/ 


const drawerWidth = 280;

// CSS tweak to stylesheet 
// Inject the default Material theme into the makeStyles Object.
// to have access to the theme objecnt
const useStyles = makeStyles((theme) => {
    return {
        
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        
        drawer: {
            width: drawerWidth,
        },
    
        drawerPaper: {
            width: drawerWidth,
            background: '#181c1f',
        },
    
        root: {
            display: 'flex'
        },
    
        active: {
            background: '#f4f4f4'
        },

        title: {
            padding: theme.spacing(2)
        },

        appbar: {
            width: `calc(100% - ${drawerWidth}px)`
            // 100% of the site width minus the drawers width
        },
        toolbar: theme.mixins.toolbar,
        // use mixin to grab  height of the toolbar component
        // A 'mixin' is a collection of styles used by components 
        date: {
            flexGrow: 1
            // takes up all the hrz space pusing the adjacent item to the far right
        },
        avatar: {
            marginLeft: theme.spacing(2)
        },
     }
  })
  
//   const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));


export default function Layout({ children, quorum, createTransfer, approvers }) {

    const classes = useStyles()
    // const history = useHistory()
    // router hook to apply active css class to drawer buttons
    // const location = useLocation()
    // const [currentAccount, setCurrentAccount] = useState(null)

	
    return (
        <div className={classes.root}>
            {/* app bar 
                Toolbar give the app bar spaicing, the title and the icons will go 
                inside of the Toolbar
            */}
        <AppBar
            className={classes.appbar}
            elevation={0} // removes drop shadow

            >
                <Toolbar>
                    <Typography className={classes.date}>
                      Transfer List: {}
                    </Typography>
                          <Typography variant= "subtitle2" align="right">
                        Connected Address: {}  Balance: {}
                        {/* TODO: Dynamic changing of the address */}
                             </Typography>
               
                    <Avatar src="/logo512.png" className={classes.avatar} />
                </Toolbar>
            </AppBar>

            <Drawer

                className={ classes.drawer }
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper}} // override css component classes
                >
              
                {/* list / links   How to add itemes to a menu in a drawer and flip back and forth between routes <ListItem /> goes inside of the map */}
               <div>
               <List>                             
                    <ListItem >
                        <LogoSection />
                        {/* <Typography variant ="h5" className={classes.title}>  Multisig Wallet</Typography> */}
                    </ListItem>
                    <ListItem>
                        <CreateNewTransfer createTransfer={createTransfer} quorum={ quorum }/>
                    </ListItem>

                    <ListItem>
                        <Quorum quorum={ quorum } approvers={ approvers }/>
                    </ListItem>              
               </List>
               </div>
            </Drawer>
          

            <div className={classes.page}>
                {/* Created spacing above content to get outof the way of the toolbar */}
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}
