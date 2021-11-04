import React from 'react';
import { Typography } from '@material-ui/core';
import { spacing } from '@material-ui/system';


export const PageTitle = (props) => {
    return (
        <div>
            <Typography variant='h4' align={'center'} spacing={3} gutterBottom>{props.title}</Typography>
        </div>
    )
}

export default PageTitle;
