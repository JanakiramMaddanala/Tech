import React from 'react';
import TemparatureCalculator from './TemparatureCalculator';
import AppContext from '../contexts/AppContext';

function Context() {
    return <AppContext.Provider value="Sample Application">
        <TemparatureCalculator>
            <hr />
        </TemparatureCalculator>
    </AppContext.Provider>;
}

export default Context;
