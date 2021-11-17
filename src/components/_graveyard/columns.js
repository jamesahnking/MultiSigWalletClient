// Creating a Basic Table in 6 Steps
// 2. Define the columes for your Table

// Each 'Header' is a column in the table
// the 'accessor' is equal to the string lable of the data column
// we are mapping the colums to a specific data value 
// This helps react table identify what data goes under what colume

export const COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
    },
    {
        Header: 'Amount',
        Footer: 'Amount',
        accessor: 'amount',
    },
    {
        Header: 'Recipient',
        Footer: 'Recipient',
        accessor: 'to',

    },
    {
        Header: 'Approvals',
        Footer: 'Approvals',
        accessor: 'approvals',
    },
    {
        Header: 'Sent',
        Footer: 'Sent',
        accessor: 'sent',
        Cell: function Cell(cell) {
            const { remove } = cell;
            return <button onClick={() => remove(cell.row.index)}>Approve</button>;
        }
        
    },

]