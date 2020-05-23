import React from 'react';
import ColoredLed from '../ColoredLed';
import { create } from 'react-test-renderer';

describe('ColoredLed', () => {
    it('should display a red indicator light', () => {
        const mustBeRed = create(<ColoredLed color="red" />);
        expect(mustBeRed.toJSON()).toMatchSnapshot();

        const mustBeRedToo = create(<ColoredLed color="#FF0000" />);
        const mustBeRedTooJson: any = mustBeRed.toJSON();
        expect(mustBeRedToo.toJSON()).toMatchObject(mustBeRedTooJson);
    });
});