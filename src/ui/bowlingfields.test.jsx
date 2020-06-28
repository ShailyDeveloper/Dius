import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BowlHandler from './bowlingfields';
import '@testing-library/jest-dom';

configure({ adapter: new Adapter() });

describe('BowlDropDown', () => {
    it('should match its snapshot', () => {
        const wrapper = shallow(<BowlHandler></BowlHandler>);
        expect(wrapper.find(BowlHandler)).toMatchSnapshot();
    });
});