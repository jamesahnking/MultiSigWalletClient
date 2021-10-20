import React, { useState, useEffect } from 'react';

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
        <div> 
            <h2> Create Transfer</h2>
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
                  <button>Submit</button>
            </form>

            
        </div>
    )
}

export default NewTransfer
