import React from 'react'

const TransferList = ({transfers, approveTransfer}) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td>Amount</td>
                        <td>To</td>
                        <td>approvals</td>
                        <td>sent</td>
                        <td>Qrm</td>

                    </tr>
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
                                <button onClick={() => approveTransfer(transfer.id)} disabled={!transfer.sent === false}> Approve </button></td>
                        </tr>
                    ))}

                </tbody>
            </table>
            
        </div>
    );
}
export default TransferList
