import React from 'react';
import { InnovationImage } from './InnovationImage';
import { InnovationHeader } from './InnovationHeader';
import { InnovationDescription } from './InnovationDescription';
import { InnovationFooter } from './InnovationFooter';

export const Innovation = () => {
    return (
        <div>
            <InnovationImage />
            <InnovationHeader />
            <InnovationDescription />
            <InnovationFooter />
        </div>
    );
};
