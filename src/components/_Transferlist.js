import React from 'react'
import{ Button, Typography, Container } from "@material-ui/core";

const TransferList = ({transfers, approveTransfer}) => {
    return (
        <Container>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Amount</th>
                        <th>To</th>
                        <th>approvals</th>
                        <th>sent</th>
                        <th>Approved</th>
                    </tr>
                </thead>
                <tbody>
                    {/* loop through list of transfers  */}
                    {transfers.map(transfer => (
                      <tr key={transfer.id}>  
                            <td>{transfer.id}</td>
                            <td>{transfer.amount}</td>
                            <td>{transfer.to}</td>
                            <td>{transfer.approvals}</td>
                            <td>{transfer.sent ? 'yes' : 'no'}</td>
                            <td> 
                                <Button variant="outlined" onClick={() => approveTransfer(transfer.id)} disabled={!transfer.sent === false}> Approve </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </Container>
    );
}
export default TransferList
