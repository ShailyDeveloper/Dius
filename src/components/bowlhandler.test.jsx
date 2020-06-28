import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BowlHandler from './bowlhandler';
import BowlValue from '../ui/bowlingfields';
import BowlButton from '../ui/bowlingbutton';
import '@testing-library/jest-dom';

configure({ adapter: new Adapter() });

describe('Bowl Handler', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<BowlHandler showsecond={{ str1Val: "4" }} />);
    });
    it('match the snapshot of BowlHandler function', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('BowlValues should match its snapshot', () => {
        expect(BowlValue).toMatchSnapshot();
    });
    it('BowlButton should match its snapshot', () => {
        expect(BowlButton).toMatchSnapshot();
    });
    it('BowlValues should be rendered twice when the showval is true', () => {
        wrapper = shallow(<BowlHandler showsecond={{ str1Val: "4", showval: true }} />);
        expect(wrapper.find(BowlValue)).toHaveLength(2);
    });
    it('BowlValues should not be rendered once when the showval is true', () => {
        wrapper = shallow(<BowlHandler showsecond={{ str1Val: "4", showval: true }} />);
        expect(wrapper.find(BowlValue)).not.toHaveLength(1);
    });
    it('BowlValues should be rendered once when the showval is false', () => {
        wrapper = shallow(<BowlHandler showsecond={{ str1Val: "4", showval: false }} />);
        expect(wrapper.find(BowlValue)).toHaveLength(1);
    });
    it('BowlValues should not be rendered twice when the showval is false', () => {
        wrapper = shallow(<BowlHandler showsecond={{ str1Val: "4", showval: false }} />);
        expect(wrapper.find(BowlValue)).not.toHaveLength(2);
    });
    it('BowlButton should not render for first strike', () => {
        wrapper = shallow(<BowlHandler showsecond={{ str1Val: "10", laststrike: 1 }} />);
        expect(wrapper.find(BowlButton)).toHaveLength(0);
    });
    it('BowlButton should render once for first strike', () => {
        wrapper = shallow(<BowlHandler showsecond={{ str1Val: "10", laststrike: 1 }} />);
        expect(wrapper.find(BowlButton)).not.toHaveLength(1);
    });
    it('BowlButton should not render once for second strike', () => {
        wrapper = shallow(<BowlHandler showsecond={{ str2Val: "10", laststrike: 1 }} />);
        expect(wrapper.find(BowlButton)).toHaveLength(0);
    });
    it('BowlButton should render once for second strike', () => {
        wrapper = shallow(<BowlHandler showsecond={{ str2Val: "10", laststrike: 1 }} />);
        expect(wrapper.find(BowlButton)).not.toHaveLength(1);
    });
    it('BowlButton should not render once for second strike', () => {
        wrapper = shallow(<BowlHandler showsecond={{ str2Val: "10", laststrike: 1 }} />);
        expect(wrapper.find(BowlButton)).not.toHaveLength(1);
    });
    it('BowlButton should render once for a spare', () => {
        wrapper = shallow(<BowlHandler showsecond={{ str1Val: "6", str2Val: "4", lastspare: 0 }} />);
        expect(wrapper.find(BowlButton)).toHaveLength(1);
    });
    it('BowlButton should not render once for a spare', () => {
        wrapper = shallow(<BowlHandler showsecond={{ str1Val: "6", str2Val: "4", lastspare: 1 }} />);
        expect(wrapper.find(BowlButton)).not.toHaveLength(1);
    });
    it('BowlButton should render once for a normal round', () => {
        wrapper = shallow(<BowlHandler showsecond={{ str1Val: "6", str2Val: "2", lastspare: 0, laststrike: 0 }} />);
        expect(wrapper.find(BowlButton)).toHaveLength(1);
    });
    it('BowlButton should not render once for a normal round', () => {
        wrapper = shallow(<BowlHandler showsecond={{ str1Val: "6", str2Val: "2", lastspare: 1, laststrike: 0 }} />);
        expect(wrapper.find(BowlButton)).not.toHaveLength(1);
    });
    it('BowlButton should not render once for a normal round', () => {
        wrapper = shallow(<BowlHandler showsecond={{ str1Val: "6", str2Val: "2", lastspare: 1, laststrike: 1 }} />);
        expect(wrapper.find(BowlButton)).not.toHaveLength(1);
    });
    it('BowlButton should not render once for a normal round', () => {
        wrapper = shallow(<BowlHandler showsecond={{ str1Val: "6", str2Val: "2", lastspare: 0, laststrike: 1 }} />);
        expect(wrapper.find(BowlButton)).not.toHaveLength(1);
    });
    it('BowlButton should not render for first strike in the final round', () => {
        wrapper = shallow(<BowlHandler showsecond={{ str1Val: "10", laststrike: 1, roundcount: 10 }} />);
        expect(wrapper.find(BowlButton)).toHaveLength(0);
    });
    it('BowlButton should render once for first strike in the final round', () => {
        wrapper = shallow(<BowlHandler showsecond={{ str1Val: "10", laststrike: 0, roundcount: 10 }} />);
        expect(wrapper.find(BowlButton)).toHaveLength(1);
    });
    it('BowlButton should not render once for second strike in final round', () => {
        wrapper = shallow(<BowlHandler showsecond={{ str2Val: "10", laststrike: 1, roundcount: 10 }} />);
        expect(wrapper.find(BowlButton)).toHaveLength(0);
    });
    it('BowlButton should render once for second strike in final round', () => {
        wrapper = shallow(<BowlHandler showsecond={{ str2Val: "10", laststrike: 0, roundcount: 10 }} />);
        expect(wrapper.find(BowlButton)).toHaveLength(1);
    });
    it('BowlButton should not render once for a spare in final round', () => {
        wrapper = shallow(<BowlHandler showsecond={{ str1Val: "4", str2Val: "5", lastspare: 1, roundcount: 10 }} />);
        expect(wrapper.find(BowlButton)).not.toHaveLength(1);
    });
    it('BowlButton should render once for a spare in final round', () => {
        wrapper = shallow(<BowlHandler showsecond={{ str1Val: "4", str2Val: "5", lastspare: 0, roundcount: 10 }} />);
        expect(wrapper.find(BowlButton)).toHaveLength(1);
    });
    it('BowlButton should not render once for a spare in final round', () => {
        wrapper = shallow(<BowlHandler showsecond={{ str1Val: "6", str2Val: "4", lastspare: 1, roundcount: 10 }} />);
        expect(wrapper.find(BowlButton)).not.toHaveLength(1);
    });
    it('BowlButton should render once for a normal strike in final round', () => {
        wrapper = shallow(<BowlHandler showsecond={{ str1Val: "6", str2Val: "2", lastspare: 0, laststrike: 0, roundcount: 10 }} />);
        expect(wrapper.find(BowlButton)).toHaveLength(1);
    });
    it('BowlButton should not render once for a normal strike in final round', () => {
        wrapper = shallow(<BowlHandler showsecond={{ str1Val: "6", str2Val: "2", lastspare: 1, laststrike: 0, roundcount: 10 }} />);
        expect(wrapper.find(BowlButton)).not.toHaveLength(1);
    });
    it('BowlButton should not render once for a normal strike in final round', () => {
        wrapper = shallow(<BowlHandler showsecond={{ str1Val: "6", str2Val: "2", lastspare: 1, laststrike: 1, roundcount: 10 }} />);
        expect(wrapper.find(BowlButton)).not.toHaveLength(1);
    });
    it('BowlButton should not render once for a normal strike in final round', () => {
        wrapper = shallow(<BowlHandler showsecond={{ str1Val: "6", str2Val: "2", lastspare: 0, laststrike: 1, roundcount: 10 }} />);
        expect(wrapper.find(BowlButton)).not.toHaveLength(1);
    });

});
