import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import{ Button, Typography, Container } from "@material-ui/core";

const TransferList = ({transfers, approveTransfer}) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">

            <TableHead>
                <TableRow>
                    <TableCell align="center">Id</TableCell>
                    <TableCell align="center">Amount</TableCell>
                    <TableCell align="center">Recipient</TableCell>
                    <TableCell align="center">Approvals</TableCell>
                    <TableCell align="center">Sent?</TableCell>
                    <TableCell align="center">Approve</TableCell>
                </TableRow>
            </TableHead>
               
               
            <TableBody>
                    {/* loop through list of transfers  */}
                    {transfers.map(transfer => (
                      <TableRow key={transfer.id}>  
                            <TableCell align="center">{transfer.id}</TableCell>
                            <TableCell align="center">{transfer.amount}</TableCell>
                            <TableCell align="center">{transfer.to}</TableCell>
                            <TableCell align="center">{transfer.approvals}</TableCell>
                            <TableCell align="center">{transfer.sent ? 'yes' : 'no'}</TableCell>
                            <TableCell align="center"> 
                                <Button variant="outlined" onClick={() => approveTransfer(transfer.id)} disabled={!transfer.sent === false}> Approve </Button>
                            </TableCell>
                        </TableRow>
                    ))}
            </TableBody>

            </Table>
        </TableContainer>
    );
}
export default TransferList
