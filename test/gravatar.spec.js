import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import md5 from 'md5';

import Gravatar from '../lib/gravatar';
import Avatar from '../lib/avatar';
import Email from '../lib/email';

describe('<Gravatar />', () => {
  it('contains an <Avatar/> component', function () {
    const wrapper = mount(<Gravatar/>);
    expect(wrapper.find(Avatar)).to.have.length(1);
  });

  it('contains an <Email/> component', function () {
    const wrapper = mount(<Gravatar/>);
    expect(wrapper.find(Email)).to.have.length(1);
  });

  it('should have an initial email state', function () {
    const wrapper = mount(<Gravatar/>);
    expect(wrapper.state().email).to.equal('someone@example.com');
  });

  it('should have an initial src state', function () {
    const wrapper = mount(<Gravatar/>);
    expect(wrapper.state().src).to.equal('http://placehold.it/200x200');
  });

  it('should have an initial src state', function () {
    const wrapper = mount(<Gravatar/>);
    expect(wrapper.state().src).to.equal('http://placehold.it/200x200');
  });

  it('should update the src state on clicking fetch', function () {
    const wrapper = mount(<Gravatar/>);
    wrapper.setState({ email: 'markthethomas@gmail.com' });
    wrapper.find('button').simulate('click');

    expect(wrapper.state('email')).to.equal('markthethomas@gmail.com');
    expect(wrapper.state('src')).to.equal(`http://gravatar.com/avatar/${md5('markthethomas@gmail.com')}?s=200`);
  });

});
