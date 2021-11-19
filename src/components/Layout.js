import { Toolbar, AppBar, makeStyles, Card } from '@material-ui/core';
import { Drawer } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import Quorum from '../components/Quorum.js';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import CreateNewTransfer from '../components/CreateNewTransfer.js'
import LogoSection from '../components/LogoSection'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const drawerWidth = 280;

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

        },
        toolbar: theme.mixins.toolbar,

        date: {
            flexGrow: 1

        },
        avatar: {
            marginLeft: theme.spacing(2),

        },
     }
  })
  

export default function Layout({ children, quorum, createTransfer, approvers, getAccounts}) {

    const classes = useStyles()

    return (
        <div className={classes.root}>

        <AppBar
            className={classes.appbar}
            elevation={0}
            >
                <Toolbar>
                    <Typography variant="h5" className={classes.date}>
                      Transfer List: 
                    </Typography>
                    <Typography variant= "subtitle2" align="right">
                    Connected Address: { getAccounts[0] } 
                    </Typography>
               
                    <Avatar aria-label="recipe"  className={classes.avatar}>
                       <AccountCircleIcon />
                    </Avatar>
                </Toolbar>
            </AppBar>

            <Drawer
                className={ classes.drawer }
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper}} 
                >
                <div>
                <List>                             
                        <ListItem >
                            <LogoSection />
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
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}
