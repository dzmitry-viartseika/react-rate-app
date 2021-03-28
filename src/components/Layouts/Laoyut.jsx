import React from 'react';
import classes from './layout.module.scss';
import AddClass from '../../hoc/AddClass';

const Layout = () => {
    return (
        <div>
            Layout
        </div>
    )
}

export default AddClass(Layout, classes.appLayout);
