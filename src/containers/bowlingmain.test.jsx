import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BowlHandler from './bowlingmain';
import '@testing-library/jest-dom';

configure({ adapter: new Adapter() });

describe('DisplayControl', () => {
    it('should not render the button at the launch');
    const wrapper = shallow(<BowlHandler></BowlHandler>);
    expect(wrapper.find(BowlHandler)).toMatchSnapshot();

});