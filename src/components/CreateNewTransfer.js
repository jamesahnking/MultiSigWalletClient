import React, { useState, useEffect } from 'react';
import{ Typography, CardHeader,Button, IconButton, Card, List, ListItem,ListItemText, CardContent } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core'
import { Avatar } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel'
import { Box } from '@mui/system';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';


    // instantiate css tweaks for button using makeStyle
    // useStyles is a hook now. you made a hook ;=) 
    const useStyles = makeStyles({

        subheader:{
            color:'#fff'
        },

        field: {
        marginTop:20,
        marginBottom:20,
        color: '#fff',
        display: 'block',

        },
        formBackground:{
            background: '#fff'
        },
        linearGradient: {
            background: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
        },
      
        btn: {
            marginBottom:20,
        },
        avatar: {
            background: '#181c1f'
        },
        whiteType: {
            color: '#fff'
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
                How does creating a transfer work? 
            </DialogTitle>

            <List>
                <ListItem button onClick={() => handleListItemClick('test')}>
                    <ListItemText primary='Approved addresses can create a transfer by specifying an amount and a recipient. 

Each approved address can also authorize a transfer. Each transfer needs two approvals to release and send a payment.'/> 
                    
                </ListItem>
            </List>
        </Dialog>
    )
}




const CreateNewTransfer = ({createTransfer, approvers}) => {
    // state holds list of transfers
    const [ transfer, setTransfer ] = useState(undefined);

    // Modal Constants
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);




    // Refresh state so the list auto 
    // refreshes with latest transactions
    useEffect(() => {
        setTransfer(transfer);
        },[transfer]);


    // form submission stores it its state 
    const submit = e => {
        e.preventDefault()
        createTransfer(transfer);
    }

    // adds value of fields - on submission get added as 
    // values for the transfer cuz state needs to be copied and replaced
    // to be changed
   
    const updateTransfer = (e, field) => {
        const value = e.target.value;
        setTransfer({...transfer, [field]: value});
        }

    const classes = useStyles();
    
    return (
        <Box sx={{ width: 1}}>
        <Card className={classes.linearGradient}>

            <CardHeader
            avatar={
                <Avatar aria-label="recipe" variant="rounded" className={classes.avatar}>
                    <AttachMoneyRoundedIcon />
                </Avatar>
            }
                    action={
                        <IconButton aria-label="settings" onClick={ handleOpen }> 
                        <HelpOutlineIcon />
                        </IconButton>
                    }
                    title="Transfer Funds"
                    subheader=''
                /> {/* CardHeader end */}

                <SimpleDialog 
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
                /> 

                <CardContent>
                  {/* <Paper> */}
                <Typography
           
                variant="h6"
                color="textPrimary"
                component="h2"
                // gutterBottom
                >
                    Create Transfer
                </Typography> 
                        <form onSubmit={e => submit(e)}>
                            <FormLabel>
                                <TextField 
                                
                                onChange={e => updateTransfer(e, 'amount')}   
                                className={classes.whiteType}
                                    id ="amount"
                                    label="Amount"
                                    variant="outlined"
                                    color="primary" 
                                    fullWidth
                                    required
                                    // error={amountError}
                                />
                            </FormLabel>
                            <TextField 
                                onChange={e => updateTransfer(e, 'to')}   
                                className={classes.field}
                                    id ="to"
                                    label="To"
                                    variant="outlined"
                                    color="primary" 
                                    fullWidth
                                    required
                                    // error={recipientError}
                            />
                            <Button
                                // onClick={() => console.log("You CLicked me")}
                                className={classes.btn}
                                type="submit"
                                color="primary"
                                variant="contained"
                                size="large"
                                fullWidth
                                endIcon={<KeyboardArrowRightIcon />}
                                // className={classes.btn}
                                onClick={() => console.log('you clicked to transfer')}
                                > 
                                Submit
                            </Button>
                    </form>
                {/* </Paper> */}
        </CardContent>
            </Card>
    </Box>

    )
}

export default CreateNewTransfer