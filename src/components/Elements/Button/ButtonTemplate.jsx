import React from 'react';
import classes from './buttonTemplate.module.scss';

const ButtonTemplate = props => {

    return (
        <button
            className={classes.appBtn}
            onClick={() => props.clickEvent(props.arg || '')}
        >
            {props.buttonText}
        </button>
    )
};

export default ButtonTemplate;
