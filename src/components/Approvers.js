import React from 'react'
import { Card, CardHeader, CardContent, Typography, makeStyles, Avatar, Container, Paper, Box } from '@material-ui/core';
// import { IconButton } from '@material-ui/core';
// import { DeleteOutlined } from '@material-ui/icons';
// import { yellow, pink, green, blue } from '@material-ui/core/colors'

const Approvers = ({ approvers }) => {
    return ( 

                <Typography
                variant="body2"     
                >
                 Approvers: {approvers.join(', ')}
                </Typography>
        
    )
}


export default Approvers;