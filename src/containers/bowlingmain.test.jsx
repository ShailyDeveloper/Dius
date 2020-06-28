import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BowlMain from './bowlingmain';
import BowlHead from '../components/bowlhandler';
import '@testing-library/jest-dom';

configure({ adapter: new Adapter() });
let wrapper;
describe('BowlMain', () => {
    beforeEach(() => {
        wrapper = shallow(<BowlMain showsecond={{ str1Val: "4" }} />);
    })
    it('should match the snapshot', () => {
        const wrapper = shallow(<BowlMain></BowlMain>);
        expect(wrapper).toMatchSnapshot();
    });
    it('should render bowling Header', () => {
        expect(wrapper.find(BowlHead)).toHaveLength(1);
    });
    it('should not render bowling Header', () => {
        expect(wrapper.find(BowlHead)).not.toHaveLength(0);
    });
});