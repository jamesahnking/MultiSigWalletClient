import React from 'react'

const TransferList = ({transfers, approveTransfer}) => {
    return (
        <div>
            <table>
                <thead></thead>
                    <tr>
                        <th>Id</th>
                        <th>Amount</th>
                        <th>To</th>
                        <th>approvals</th>
                        <th>sent</th>
                        <th></th>

                    </tr>
                <tbody>
                    {/* loop through list of transfers  */}
                    {transfers.map(transfer => (
                      <tr key={transfer.id}>  
                            <td>{transfer.id}</td>
                            <td>{transfer.amount}</td>
                            <td>{transfer.to}</td>
                            <td>
                                {transfer.approvals}
                            </td>
                            <td>{transfer.sent ? 'yes' : 'no'}</td>
                            <td> 
                                <button 
                                onClick={() => approveTransfer(transfer.id)}> Approve </button></td>
                            {/* <td> <button onClick={() => approveTransfer(transfer.id)}> Approve </button></td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TransferList