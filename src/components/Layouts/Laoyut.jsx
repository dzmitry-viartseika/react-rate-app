import React from 'react';
import HeaderTemplate from "../Header/HeaderTemplate";
import SideBar from "../Sidebar/SideBar";
import classes from './layout.module.scss';
import AddClass from '../../hoc/AddClass';
import { Route } from 'react-router-dom';
import routes from '../../routes/routes';

const Layout = () => {
    return (
        <div className={classes.appLayout}>
            <HeaderTemplate />
            <section className={classes['appLayout-content']}>
                <div className={classes['appLayout-content-main']}>
                    {
                      Object.values(routes).map(route =>
                          <Route
                              exact
                              key={route.component}
                              path={route.url}
                              component={route.component}
                          />
                          )
                    }
                </div>
                <div className={classes['appLayout-content-sidebar']}>
                    <SideBar />
                </div>
            </section>
        </div>
    )
}

export default AddClass(Layout, classes.appLayout);
