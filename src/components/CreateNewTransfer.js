import React, { useState, useEffect } from 'react';
import{ Typography, CardHeader,Button, IconButton, Card, CardContent } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core'
import { Paper } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { Box } from '@mui/system';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';

const CreateNewTransfer = ({createTransfer, newList, quorum, getAccount, approvers}) => {
    // state holds list of transfers
    const [ transfer, setTransfer ] = useState(undefined);

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
    
    
    // instatiate state for error messaging
    // false beacuse the erros shoudlnt be seen 
    // but... there will be a check after the form is submitted
    const [amountError, setAmountError] = useState('false')
    const [recipientError, setRecipientError] = useState('false')


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
                        <IconButton aria-label="settings" >
                        <HelpOutlineIcon />
                        </IconButton>
                    }
                    title="Owner:"
                    subheader={`approvers[0]`}
                /> {/* CardHeader end */}




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