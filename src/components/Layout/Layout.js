import React from 'react';
import Auxil from '../../hoc/Auxi';
// import classes from './Layout.css';
import './Layout.css';

const layout = ( props ) =>(
    <Auxil>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className="Content">
        {props.children}
    </main>
    </Auxil>

);
export default layout;