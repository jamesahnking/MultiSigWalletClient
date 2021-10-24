// Creating a Basic Table in 6 Steps:
// React Table Tutorial - 3 - Basic Table https://youtu.be/hson9BXU9F8
// React Table Tutorial - 6 - Sorting https://youtu.be/zypbcG3ZVnc
// 3. Use the data and columes defined to cerate a table instance using react-table
import React, { useMemo } from 'react'
import { useTable, useSortBy } from 'react-table'
import MULTISIG_MOCK_DATA from './MULTISIG_MOCK_DATA.json' // 
import { COLUMNS } from './columns'
import './table.css'

const TransactionTable = () => {
     /*  
    Use the useTable function to declare columes and rows for the table
    useTable accepts columns and data. columns are from columns.js
    data is from MOCK_DATA.json. They must be momoized so we import 'useMemo'
    from 'react'. useMemo is stored in a constant and defines them both

    'useMemo' insure the data isnt reacreated on every render or it will think
    its recieving data on every render. 
    */

    /* Once hooks have been memoized they can be added to the useTable func */
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MULTISIG_MOCK_DATA, []);

    
    // deconstruct create-table prop values and add them to our tableInstance
    // all of these values are used with the HTML to make it work
    // 'getTableProps' 'getTableBodyProps' 'headerGroups' 'rows', 'prepareRow' all must be 
    // destructured inside of the table.
    // 'headerGroups' contains the column heading information and belongs in the <thead> tag
    // requires us to use the map method to render the header group like it was a list
    // on each header group we render a <tr> tag
    const  { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        footerGroups,
        rows, 
        prepareRow 
    } = useTable({
        columns,
        data
    },
    useSortBy
    )//adds useSort functionality


    return (
        // Table will contain a <header> and a <body> section
        // 4. Define a basic table structure using plain HTML
        <table {...getTableProps()}>
            {/* header group table jsx expression header construction inside of the <thead> 
            renders all the headers at the top of each column */}
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}> 
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                <span>
                                {column.isSorted
                                ? column.isSortedDesc
                                    ? ' 🔽'
                                    : ' 🔼'
                                : ''}
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            { /* tbody jsx expression header construction inside of the <tbody> */}                
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return(
                        <tr {...row.getRowProps()}>  
                          {row.cells.map((cell) => {return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>})}                        
                        </tr>
                        )
                    })
                }
            </tbody>
            {/* Footer */}
            <tfoot>
                {footerGroups.map(footerGroup => (
                    <tr {...footerGroup.getFooterGroupProps}>
                        {
                            footerGroup.headers.map(column => (
                                <td {...column.getFooterProps}>
                                    {
                                        column.render('Footer')
                                    }
                                </td>
                            ))
                         }
                    </tr>
                 ))}
            </tfoot>
        </table>
    )
}


export default TransactionTable;