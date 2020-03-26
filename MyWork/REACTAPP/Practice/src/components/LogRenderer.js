import React from 'react';
import { Home } from './Home';
import Logger from './Logger';

export const LogRenderer = () => {
    return (
        <div>
            <Logger
                render={() => {
                    return <Home />;
                }}
            />
        </div>
    );
};
