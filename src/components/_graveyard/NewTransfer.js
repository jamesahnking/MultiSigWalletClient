import React, { useState, useEffect } from 'react';
import{ Button, Typography, Container } from "@material-ui/core";

const NewTransfer = ({createTransfer, newList}) => {
    // state holds list of transfers
    const [ transfer, setTransfer ] = useState(undefined);
    
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


    return (
        <Container>
        <Typography
            variant="h5"
            color="textSecondary"
            component="h2"
            gutterBottom
            >
                Create Transfer
            </Typography> 
            <form onSubmit={e => submit(e)}>
                <label htmlFor="amount">Amount</label>
                <input
                    id ="amount"
                    type = "text"
                    onChange={e => updateTransfer(e, 'amount')}   
                />

                <label htmlFor="to">To</label>
                <input
                    id ="to"
                    type = "text"
                    onChange={e => updateTransfer(e, 'to')}   
                />
                <Button 
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={() => console.log('you clicked to transfer')}
                  >
                      Doovan
                  </Button>
            </form>
        </Container>
    )
}

// export default NewTransfer
