import React from 'react';
import { shallow } from 'enzyme';
import User from '../../source/users/User';

describe("Testing the structure", function() {
  let component;
  const user = { id: 1, email: 'aa', name: 'as' };

  beforeEach(() => {
    component = shallow(<User {...user} />);
  });

  it("div", function() {
    expect(component.is('#user-1')).toBe(true);
    expect(component.children().length).toEqual(2);
  });

  it("div > link", function() {
    const link = component.find('Link');
    expect(link.length).toEqual(1);
    expect(link.children().text()).toEqual(user.name);
    expect(link.prop('to')).toEqual('/user/1');
  });

  it("div > p", function() {
    const p = component.find('p');
    expect(p.length).toEqual(1);
    expect(p.text()).toEqual(user.email);
  });
});
