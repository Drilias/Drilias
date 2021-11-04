import React from 'react';
import { Typography } from '@material-ui/core';


const TripInfoItem = (props) => {
    return (
        <Typography variante={'body1'}>
            {props.infoName}: {props.info}
        </Typography>
    )
}

export default TripInfoItem;