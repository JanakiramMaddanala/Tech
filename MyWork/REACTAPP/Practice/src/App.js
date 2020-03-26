import React, { Fragment } from 'react';
import { LogRenderer } from './components/LogRenderer';
import Context from './components/Context';
import Ref from './components/Ref';

export const App = () => {
    return (
        <Fragment>
            <Context />
            <LogRenderer />
            <Ref />
        </Fragment>
    );
};

